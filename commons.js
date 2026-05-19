
export { default as main } from "./main.js"

const userAgent = process.env.npm_config_user_agent;

export function nodepackagemgmt(npx){
  let agent = userAgent?.matches(/^(npm|bun|yarn|pnpm|deno)/);
  if (!agent) {
    agent = ["default", "npm"];
  }

  if (agent[1] === "npm") {
    return npx ? "npx": "npm"
  } else {
    return agent[1]
  }
}

export function nodelauncher(){
  let agent = userAgent?.matches(/^(bun|deno)/);
  if (agent) {
    return agent[1];
  } else {
    return "node"
  }
}

export function searchArgV(argv, item){
  for (let idx in argv){
    if (item instanceof RegExp) {
      if (item.test(argv[idx])) return idx;
    } else {
      if (item === argv[idx]) return idx;
    }
  }
}
