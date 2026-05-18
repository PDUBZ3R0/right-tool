# right-tool
### Select the right tool for the job! 

Provides ***placeholder*** *keywords* you can use in **package.json** to represent a class of tools (*node.js*: **package manager**, **runtime**), (**container engine**) to be replaced at runtime by the most appropriate tool, determined by different conditions.

## cascade
This keyword is a drop in replacement for your package manager: **npm**, **yarn**, **bun** or **pnpm**
If you have a script `cascade run build && cascade run test` it will use the same tool you used on the command line to execute the script from *package.json* if your scripts call other scripts and other *project.json* that use cascade, the same tool will continue to be used across the board, providing consistency and avoiding mixed contexts, clashes between lockfiles and dependency resolution within the project.

#### escapade
This is virtually identical to cascade except it provides support for `npx` commands.

#### launcher
This tool uses the logic of cascade to select the runtime **node** or **bun** depending on whether bun was used to launch *package.json*

## containment
Use this keyword to identify and execute the container runtime present on that system. Most popular options are **podman**, **docker**, **kubectl** for container management and deployment, also detects: **buildah**, **incus**, **nerdctl**, **colima**


## API
You can include the API in your code to get the string result of which command is executed on the command line:

```javascript
import { containerengine, nodepackagemgmt, nodelauncher } from 'right-tool'
let ce = containerengine(); // returns "podman"
let pm = nodepackagemgmt(true); // returns "yarn" (parameter: npx - boolean: whether to return npx instead of npm)
let cl = nodelauncher() // returns "node"
```