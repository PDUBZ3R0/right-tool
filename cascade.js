#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { main, nodepackagemgmt, searchArgV } from './commons.js'

if (main(import.meta.url)) {
	let argv = process.argv.slice(2);
	let iora = (searchArgV(/^(add|install|i)$/));
	let packmgr = nodepackagemgmt(false);
	if (typeof iora !== "undefined") {
		if (packmgr === "npm" || iora+1 === argv.length) argv[iora] = "install";
		else argv[iora] = "add";
	}
	const result = spawnSync(packmgr, argv, { stdio: "inherit" });
	process.exit(result.status ?? 1);
}