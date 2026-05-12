

import { isPackageManager, isNpm, isYarn, isPnpm, isBun } from 'is-npm';

export function nodepackagemgmt(x){
	if (isBun) {
		return "bun"
	} else if (isYarn) {
		return "yarn"
	} else if (isPnpm) {
		return "pnpm"
	} else if (x) {
		return "npx"
	} else {
		return "npm"
	}
}