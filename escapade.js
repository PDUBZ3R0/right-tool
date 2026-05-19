#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { main, nodepackagemgmt } from './commons.js'

if (main(import.meta)) {
	const result = spawnSync(nodepackagemgmt(true), process.argv.slice(2), { stdio: "inherit" });
	process.exit(result.status ?? 1);
}