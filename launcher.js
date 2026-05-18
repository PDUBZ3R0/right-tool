#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { main, nodelauncher } from './commons.js'

if (main(import.meta.url)) {
	const result = spawnSync(nodelauncher(), process.argv.slice(2), { stdio: "inherit" });
	process.exit(result.status ?? 1);
}