#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { fileURLToPath } from 'node:url';

const TOOLS = ["podman","docker","kubectl","buildah","incus","nerdctl","colima"];

/**
    Detects whether you have any of TOOLS installed, returns the first one found in priority order.
 */
export function containerengine() {
  function has(cmd) {
    const probe = process.platform === "win32" ? "where" : "command";
    const args = process.platform === "win32" ? [cmd] : ["-v", cmd];
    const result = spawnSync(probe, args, { stdio: "ignore", shell: process.platform !== "win32" });
    return result.status === 0;
  }
  for (let thistool of TOOLS) {
    let z = has(thistool);
    if (z) {
      return thistool;
    } 
  }
}

/**
    Determine if this script was called directly from the command line or imported to use the containerengine method.
 */
const main = (()=>{ 
  if (typeof import.meta.main === "undefined") {
    const __filename = fileURLToPath(import.meta.url);
    return (process.argv[1] === __filename)
  } else {
    return import.meta.main;
  }
})()

if (main) {
  const tool = containerengine();
  if (!tool) {
    console.error("Error: none of the supported required tools", tools, "is installed or in PATH.");
    process.exit(1);
  } else {
    const result = spawnSync(tool, process.argv.slice(2), { stdio: "inherit" });
    process.exit(result.status ?? 1);
  }
}