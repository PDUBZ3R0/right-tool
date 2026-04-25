# right-tool
### Select the right tool for the job! 

Provides a command/keyword to represent one of many similar tools, that will call the most appropriate tool available
in the running environment, whether that is your local machine where you are doing development or on a server, whether that is a 
*test environment* / *production server* or some other remote system where you are deploying a service.

## cascade
Use this keyword in your package.json scripts wherever you want to execute a script: `**cascade** run *scriptname*`
Whichever tool you use to build or run the project: **npm**, **yarn**, **bun** or **pnpm** that same tool will be used by all of the scripts where you use cascade,
providing consistency and avoids mixing tools and contexts within the same project.

## containment
Use this to identify and execute the container runtime setup on that system. Most popular options are **podman**, **docker**, **kubectl** for container managenebt and deployment, the following additional tools will be recognized: **buildah**, **incus**, **nerdctl**, **colima**