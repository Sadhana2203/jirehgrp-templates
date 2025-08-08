// scripts/test-templates.mjs

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const templates = [
  "templates/nextjs",
  "templates/react-vite/js",
  "templates/react-vite/ts",
  "templates/vanilla/vite/js",
  "templates/vanilla/vite/ts",
];

const run = (cmd, cwd) =>
  execSync(cmd, { stdio: "inherit", cwd, env: process.env });

for (const dir of templates) {
  console.log(`\n=== Testing ${dir} ===`);
  try {
    run(existsSync(`${dir}/package-lock.json`) ? "npm ci" : "npm install", dir);

    if (existsSync(`${dir}/tsconfig.json`)) {
      try { run("npx tsc --noEmit", dir); } 
      catch { run("npm i -D typescript && npx tsc --noEmit", dir); }
    }

    const scripts = execSync("npm run", { cwd: dir }).toString();
    if (scripts.includes(" build")) {
      run("npm run build", dir);
    } else {
      console.log("No build script – skipping build");
    }
  } catch (e) {
    console.error(`Failed in ${dir}`);
    process.exitCode = 1;
  }
}
