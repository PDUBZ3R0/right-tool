#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { main } from './commons.js'

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

if (main(import.meta)) {
  const tool = containerengine();
  if (!tool) {
    console.error("Error: none of the supported required tools", tools, "is installed or in PATH.");
    process.exit(1);
  } else {
    const result = spawnSync(tool, process.argv.slice(2), { stdio: "inherit" });
    process.exit(result.status ?? 1);
  }
}