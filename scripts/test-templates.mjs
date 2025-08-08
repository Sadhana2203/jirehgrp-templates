// scripts/test-templates.mjs
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const templates = [
  "templates/nextjs",
  "templates/react-vite/js",
  "templates/react-vite/ts",
  "templates/vanilla/vite/js",
  "templates/vanilla/vite/ts",
];

const pretty = {
  "templates/nextjs": "nextjs",
  "templates/react-vite/js": "react-vite/js",
  "templates/react-vite/ts": "react-vite/ts",
  "templates/vanilla/vite/js": "vanilla-vite/js",
  "templates/vanilla/vite/ts": "vanilla-vite/ts",
};

function run(cmd, cwd) {
  return execSync(cmd, { stdio: "inherit", cwd, env: process.env });
}

function inline(msg) {
  process.stdout.write(`\r${msg}`);
}
function doneLine(msg) {
  process.stdout.write(`\r${msg}\n`);
}
const pct = (i, total) => Math.round((i / total) * 100);

const results = []; // [{id, ok, notes}]
let anyFailed = false;

for (const dir of templates) {
  const label = pretty[dir] || dir;
  const steps = ["install", "typecheck", "build"];
  const total = steps.length;

  inline(`Testing ${dir} ${pct(0, total)}%`);

  const notes = [];
  let ok = true;

  try {
    // 1) install
    inline(`Testing ${dir} ${pct(1, total)}%  • install`);
    const hasLock = existsSync(path.join(dir, "package-lock.json"));
    run(hasLock ? "npm ci" : "npm install", dir);

    // 2) typecheck (TS only)
    inline(`Testing ${dir} ${pct(2, total)}%  • typecheck`);
    if (existsSync(path.join(dir, "tsconfig.json"))) {
      try {
        run("npx tsc --noEmit", dir);
      } catch {
        notes.push("installed typescript");
        run("npm i -D typescript", dir);
        run("npx tsc --noEmit", dir);
      }
    } else {
      notes.push("typecheck skipped");
      inline(`Testing ${dir} ${pct(2, total)}%  • typecheck (skipped)`);
    }

    // 3) build (if script exists)
    inline(`Testing ${dir} ${pct(3, total)}%  • build`);
    const scripts = execSync("npm run", { cwd: dir }).toString();
    if (scripts.includes(" build")) {
      run("npm run build", dir);
    } else {
      notes.push("build skipped");
      inline(`Testing ${dir} ${pct(3, total)}%  • build (skipped)`);
    }

    doneLine(`Testing ${dir} 100% ✔`);
  } catch (err) {
    ok = false;
    anyFailed = true;
    doneLine(`Testing ${dir} ✕ FAILED`);
  }

  results.push({ id: label, ok, notes });
}

// --- Summary ---
console.log("\nSummary:\n");
for (const r of results) {
  const suffix =
    r.ok
      ? "100% ✔"
      : "failed ✕";
  const extras = r.notes.length ? ` (${r.notes.join(", ")})` : "";
  console.log(`${r.id} template tested and working ${suffix}${extras}`);
}

if (anyFailed) {
  process.exitCode = 1;
  console.log("\nSome templates failed ✕");
} else {
  console.log("\nAll templates passed ✔");
}
