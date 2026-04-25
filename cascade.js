#!/usr/bin/env node

import { isPackageManager, isNpm, isYarn, isPnpm, isBun } from 'is-npm';
import { spawnSync } from "node:child_process";
import { fileURLToPath } from 'node:url';

export function nodepackagemgmt(){
	if (isBun) {
		return "bun"
	} else if (isYarn) {
		return "yarn"
	} else if (isPnpm) {
		return "pnpm"
	} else {
		return "npm"
	}
}

/**
    Determine if this script was called directly from the command line or imported to use the nodepackagemgmt method.
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
	const result = spawnSync(nodepackagemgmt(), process.argv.slice(2), { stdio: "inherit" });
	process.exit(result.status ?? 1);
}