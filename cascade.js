#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { main } from './main.js'

import { nodepackagemgmt } from './packagemgmt.js'

if (main(import.meta.url)) {
	const result = spawnSync(nodepackagemgmt(), process.argv.slice(2), { stdio: "inherit" });
	process.exit(result.status ?? 1);
}