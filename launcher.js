#!/usr/bin/env node

import { isPackageManager, isNpm, isYarn, isPnpm, isBun } from 'is-npm';
import { spawnSync } from "node:child_process";
import { main } from './main.js'

export function nodepackagemgmt(){
	if (isBun) {
		return "bun"
	} else {
		return "node"
	}
}

if (main(import.meta.url)) {
	const result = spawnSync(nodepackagemgmt(), process.argv.slice(2), { stdio: "inherit" });
	process.exit(result.status ?? 1);
}