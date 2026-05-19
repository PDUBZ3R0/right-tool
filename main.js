
import { fileURLToPath } from 'node:url';

export default function (url) { 
  if (typeof import.meta.main === "undefined") {
    const __filename = fileURLToPath(url);
    return (process.argv[1] === __filename)
  } else {
    return import.meta.main;
  }
}
