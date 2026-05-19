
import { fileURLToPath } from 'node:url';

export default function (meta) { 
  if (typeof meta?.main === "undefined") {
    const __filename = fileURLToPath(meta.url);
    return (process.argv[1] === __filename)
  } else {
    return meta.main;
  }
}
