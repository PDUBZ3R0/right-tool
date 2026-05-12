
import { fileURLToPath } from 'node:url';

/**
    Determine if this script was called directly from the command line or imported to use the nodepackagemgmt method.
 */
export const main = url=>{ 
  if (typeof import.meta.main === "undefined") {
    const __filename = fileURLToPath(url);
    return (process.argv[1] === __filename)
  } else {
    return import.meta.main;
  }
}
