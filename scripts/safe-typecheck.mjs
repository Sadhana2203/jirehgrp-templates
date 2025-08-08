// scripts/safe-typecheck.mjs

import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

const cwd = process.cwd();
const pkg = join(cwd, "package.json");
const nodeModules = join(cwd, "node_modules");

if (!existsSync(pkg)) {
  console.log("[skip] No package.json here:", cwd);
  process.exit(0);
}
if (!existsSync(nodeModules)) {
  console.log("[skip] No node_modules; skipping typecheck:", cwd);
  process.exit(0);
}

const child = spawn("npm", ["run", "typecheck", "--silent"], { stdio: "inherit" });
child.on("exit", (code) => process.exit(code ?? 1));
