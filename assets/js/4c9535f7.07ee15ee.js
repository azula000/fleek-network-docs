"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[6296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(3872),i=n(2915),l=n(6733);const s={title:"Running a node in Docker",hide_title:!0,slug:"running-a-node-in-docker",image:"./assets/running-a-node-in-docker.png?202311181211",date:new Date("2023-09-18T17:00:00.000Z"),description:"A guide on how to run Fleek Network's node in a Docker container",category:"Tutorial",tags:["guide","docker","container"]},c=void 0,u={unversionedId:"Node Operators/running-a-node-in-docker",id:"Node Operators/running-a-node-in-docker",title:"Running a node in Docker",description:"A guide on how to run Fleek Network's node in a Docker container",source:"@site/guides/Node Operators/running-a-node-in-docker.md",sourceDirName:"Node Operators",slug:"/Node Operators/running-a-node-in-docker",permalink:"/guides/Node Operators/running-a-node-in-docker",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/running-a-node-in-docker.md",tags:[{label:"guide",permalink:"/guides/tags/guide"},{label:"docker",permalink:"/guides/tags/docker"},{label:"container",permalink:"/guides/tags/container"}],version:"current",lastUpdatedAt:1697819178,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{title:"Running a node in Docker",hide_title:!0,slug:"running-a-node-in-docker",image:"./assets/running-a-node-in-docker.png?202311181211",date:"2023-09-18T17:00:00.000Z",description:"A guide on how to run Fleek Network's node in a Docker container",category:"Tutorial",tags:["guide","docker","container"]},sidebar:"defaultSidebar",previous:{title:"Managing the keystore",permalink:"/guides/Node Operators/managing-the-keystore"},next:{title:"Transfering setup ownership",permalink:"/guides/Node Operators/transfering-setup-ownership"}},d={image:n(8597).Z},p=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"For the impatient",id:"for-the-impatient",level:2},{value:"Pull and run image",id:"pull-and-run-image",level:3},{value:"Setup",id:"setup",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Create a user",id:"create-a-user",level:3},{value:"Lightning CLI source code",id:"lightning-cli-source-code",level:3},{value:"Change directory to Lightning source code",id:"change-directory-to-lightning-source-code",level:3},{value:"Install Docker",id:"install-docker",level:3},{value:"Create the Docker image",id:"create-the-docker-image",level:3},{value:"Build the Docker image",id:"build-the-docker-image",level:3},{value:"Docker Container",id:"docker-container",level:2},{value:"Generate keys",id:"generate-keys",level:2},{value:"Run the Docker Container as Systemd Service",id:"run-the-docker-container-as-systemd-service",level:2},{value:"Create the Systemd Service Unit",id:"create-the-systemd-service-unit",level:3},{value:"Viewing logs",id:"viewing-logs",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p},m="wrapper";function g(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Running a node in Docker",src:n(8597).Z,width:"1450",height:"816"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/images/"},"image")," provides all the requirements to have Fleek Network running quickly and the following guide will provide you a quick reference to get you started with Docker. "),(0,r.kt)("p",null,"Alternatively, if you need a deep dive into Docker, check the official getting started ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"here"),"."),(0,r.kt)("p",null,"TL;DR If you have Docker experience then you'll find our ",(0,r.kt)("a",{parentName:"p",href:"#for-the-impatient"},"for the impatient")," sufficient to get started."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"To follow the guide, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,r.kt)("li",{parentName:"ul"},"Git")),(0,r.kt)("h2",{id:"for-the-impatient"},"For the impatient"),(0,r.kt)("p",null,"Building a Docker image requires some effort and some of our users might find it easier to pull our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning/pkgs/container/lightning"},"latest image")," for quick access to Lightning CLI, which doesn't require them to build from source."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Docker Container image for Lightning is located at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning/pkgs/container/lightning"},"https://github.com/fleek-network/lightning/pkgs/container/lightning"),".")),(0,r.kt)("h3",{id:"pull-and-run-image"},"Pull and run image"),(0,r.kt)("p",null,"You can pull an run the Lightning pre-built Docker image from our GitHub and run the Docker container quickly by executing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run \\\n    -p 4200-4299:4200-4299 \\\n    -p 4300-4399:4300-4399 \\\n    --mount type=bind,source=$HOME/.lightning,target=/root/.lightning \\\n    --name lightning-cli \\\n    -it ghcr.io/fleek-network/lightning:latest\n")),(0,r.kt)("p",null,"Keys have to be generated when launching the service. On Docker run, if the ",(0,r.kt)("a",{parentName:"p",href:"/guides/Node%20Operators/managing-the-keystore"},"keystore")," is not found, the keys are automatically generated and stored in the Docker host's ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/keystore")," directory. To learn more about how to manage the keystore, visit the ",(0,r.kt)("a",{parentName:"p",href:"/guides/Node%20Operators/managing-the-keystore"},"managing keystore")," section."),(0,r.kt)("admonition",{title:"warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Docker image is tied to a CPU architecture, make sure that you have verified the ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/requirements#specs"},"required")," specifications to run the container successfully.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The command has a list of ports ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," values that map ports in the container on the Docker host. While we try to keep the information across our documentation in sync with the latest changes or requirements e.g. port number changes, make sure that you check the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/requirements#ports"},"ports")," to find the latest updates.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To follow the guide successfully, a good amount of memory and disk space is necessary to run Docker. The main reason for our use-case is that your host machine requires a generous amount of memory and disk space, for the containers."),(0,r.kt)("p",null,"For this guide, we used a server with the 4vCPU, 32\xa0GB ram memory and 20 GB disk space specifications. Learn more about the recommended specifications ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/requirements"},"here"),"."),(0,r.kt)("h3",{id:"create-a-user"},"Create a user"),(0,r.kt)(l.ZP,{mdxType:"CreateAUser"}),(0,r.kt)("h3",{id:"lightning-cli-source-code"},"Lightning CLI source code"),(0,r.kt)("p",null,"Start by cloning the repository located at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"https://github.com/fleek-network/lightning"),"."),(0,r.kt)(i.ZP,{mdxType:"GitCloneOptions"}),(0,r.kt)("h3",{id:"change-directory-to-lightning-source-code"},"Change directory to Lightning source code"),(0,r.kt)("p",null,"If you have cloned the project correctly, you should ",(0,r.kt)("inlineCode",{parentName:"p"},"change directory")," to the project source code directory which by default is ",(0,r.kt)("inlineCode",{parentName:"p"},"~/fleek-network/lightning"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/fleek-network/lightning\n")),(0,r.kt)("p",null,"At time of writing, this is how the project root looks like (e.g. use the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ls"},"ls")," to see the list):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 CODE_OF_CONDUCT.md\n\u251c\u2500\u2500 CONTRIBUTING.md\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 codecov.yml\n\u251c\u2500\u2500 core\n\u251c\u2500\u2500 docs\n\u251c\u2500\u2500 etc\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 rust-toolchain\n\u251c\u2500\u2500 rustfmt.toml\n\u251c\u2500\u2500 services\n\u2514\u2500\u2500 target\n")),(0,r.kt)("h3",{id:"install-docker"},"Install Docker"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To keep our guide short, we're using Ubuntu Linux. You'll have to make the required tweaks for your preferred Linux Distro. Find the list of support operating systems ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/requirements#server"},"here"),".")),(0,r.kt)("p",null,"First, update the existing list of packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,r.kt)("p",null,"Next, install the required packages to let apt use packages over HTTPS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install apt-transport-https ca-certificates software-properties-common\n")),(0,r.kt)("p",null,"Add the GPG key for the official Docker repository to your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n")),(0,r.kt)("p",null,"Add the Docker repository to apt sources and update the package database with the Docker packages from the new added repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu jammy stable"\n')),(0,r.kt)("p",null,"Set to install from the Docker repo instead of the default Ubuntu repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"apt-cache policy docker-ce\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker-ce:\n  Installed: (none)\n  Candidate: 5:24.0.6-1~ubuntu.22.04~jammy\n  Version table:\n     5:24.0.6-1~ubuntu.22.04~jammy 500\n        500 https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages\n     5:24.0.6-1~ubuntu.22.04~jammy 500\n")),(0,r.kt)("p",null,"Finally, install Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install docker-ce\n")),(0,r.kt)("p",null,"Once complete you should be able to run it via the CLI, as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker -v\n")),(0,r.kt)("p",null,"Here's the output (versions might differ a bit from the time of writing):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Docker version 24.0.6, build ed223bc\n")),(0,r.kt)("p",null,"The following command's output will indicate if Docker's working correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run hello-world\n")),(0,r.kt)("p",null,"Here's an example of the output you'll find us \"Hello from Docker!\":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n')),(0,r.kt)("p",null,"Run all the commands above in your terminal, to confirm everything's working before proceeding to the next steps."),(0,r.kt)("h3",{id:"create-the-docker-image"},"Create the Docker image"),(0,r.kt)("p",null,"A Docker image is a read-only template with instructions for creating a Docker container, like a template. Docker images also act as a starting point when using Docker. "),(0,r.kt)("p",null,'The starting point for our use-case is a Dockerfile, where all those "template instructions" are declared.'),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/fleek-network/lightning/main/Dockerfile"},"Dockerfile")," should exist in the repository source code, so make sure you have ",(0,r.kt)("a",{parentName:"p",href:"#change-directory-to-lightning-source-code"},"chage directory to the lightning source code")," to find it."),(0,r.kt)("h3",{id:"build-the-docker-image"},"Build the Docker image"),(0,r.kt)("p",null,"Build the image named as ",(0,r.kt)("inlineCode",{parentName:"p"},"lightning")," from our Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker build -t lightning -f ./Dockerfile .\n")),(0,r.kt)("p",null,"The build process takes awhile and you have to wait for completion. "),(0,r.kt)("p",null,"The output should be similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[+] Building 1.2s (16/16) FINISHED                                                                                                     docker:default\n => [internal] load build definition from Dockerfile                                                                                             0.0s\n => => transferring dockerfile: 990B                                                                                                             0.0s\n => [internal] load .dockerignore                                                                                                                0.0s\n => => transferring context: 2B                                                                                                                  0.0s\n => [internal] load metadata for docker.io/library/debian:bullseye-slim                                                                          0.6s\n => [internal] load metadata for docker.io/library/rust:latest                                                                                   0.9s\n => [stage-1 1/3] FROM docker.io/library/debian:bullseye-slim@sha256:3bc5e94a0e8329c102203c3f5f26fd67835f0c81633dd6949de0557867a87fac            0.0s\n => [builder 1/7] FROM docker.io/library/rust:latest@sha256:8a4ca3ca75afbc97bcf5362e9a694fe049d15734fbbaf82b8b7e224616c1254b                     0.0s\n => [internal] load build context                                                                                                                0.3s\n => => transferring context: 948.93kB                                                                                                            0.3s\n => CACHED [stage-1 2/3] RUN DEBIAN_FRONTEND=noninteractive apt-get update -yq &&   DEBIAN_FRONTEND=noninteractive apt-get install -yq     libs  0.0s\n => CACHED [builder 2/7] WORKDIR /lightning                                                                                                      0.0s\n => CACHED [builder 3/7] RUN apt-get update                                                                                                      0.0s\n => CACHED [builder 4/7] RUN apt-get install -y     build-essential     cmake     clang     pkg-config     libssl-dev     gcc     protobuf-comp  0.0s\n => CACHED [builder 5/7] RUN --mount=type=cache,target=/usr/local/cargo/registry     cargo install cargo-strip                                   0.0s\n => CACHED [builder 6/7] COPY . .                                                                                                                0.0s\n => CACHED [builder 7/7] RUN --mount=type=cache,target=/usr/local/cargo/registry     --mount=type=cache,target=/lightning/target     cargo buil  0.0s\n => CACHED [stage-1 3/3] COPY --from=builder /lightning/target/release/lightning-node /usr/local/bin/lgtn                                        0.0s\n => exporting to image                                                                                                                           0.0s\n => => exporting layers                                                                                                                          0.0s\n => => writing image sha256:e8e5ed19f59c3cc6a9add5bdb578c464904e9789d5f386cc4af81044c062d998                                                     0.0s\n => => naming to docker.io/library/lightning\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Docker image is only required to be built once and/or, when changes are pulled from the remote repository, or specific versions you might be interested in. Otherwise, you're not required to build it everytime to run the node. If you'd like to learn how to update the Lightning CLI, find our references ",(0,r.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/update-cli-from-source-code"},"here"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you don't update your source code and binary build often, you won't have the latest changes, which should happen frequently to take advandate of all the ongoing development. This is quite important to understand, as it causes confusion to some users. The Lightning application at time of writing does not update automatically.")),(0,r.kt)("h2",{id:"docker-container"},"Docker Container"),(0,r.kt)("p",null,"A container is what's originated from the image we discussed in the section ",(0,r.kt)("a",{parentName:"p",href:"#build-the-docker-image"},"build the docker image"),", it is a runnable instance of an image. We can create, start, stop, move, or delete a container using the Docker API or CLI."),(0,r.kt)("p",null,"Following up, we'll learn how to run the Docker container that includes our Lightning CLI program, built from our Dockerfile."),(0,r.kt)("p",null,"Once the ",(0,r.kt)("a",{parentName:"p",href:"#build-the-docker-image"},"Docker image")," is ready, run the container based on the image ",(0,r.kt)("inlineCode",{parentName:"p"},"lightning"),". Effectively running the Fleek Network Lighthing node process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run \\\n    -p 4200-4299:4200-4299 \\\n    -p 4300-4399:4300-4399 \\\n  --mount type=bind,source=$HOME/.lightning,target=/root/.lightning \\\n  --name lightning-cli \\\n  -it lightning\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Notice that the command arguments we pass are for the flag's ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," port numbers, ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," to bind mount a location in your host to a container path (useful to persist your configuration files, e.g. keystore), ",(0,r.kt)("inlineCode",{parentName:"p"},"--name")," to make it easier to identify, ",(0,r.kt)("inlineCode",{parentName:"p"},"-it")," to make it interactive (e.g. presents output to the terminal), and the image name we ",(0,r.kt)("a",{parentName:"p",href:"#build-the-docker-image"},"built earlier"),".")),(0,r.kt)("p",null,'The output would look as the following, showing the error message "Node is not whitelisted" (this error message is due to the testnet phase that requires nodes to be whitelisted to run successfully):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"thread 'main' panicked at 'Node is not whitelisted. Please join the Fleek Discord to get invited.', core/cli/src/testnet_sync.rs:45:9\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\n/root/init: line 7:     7 Aborted                 (core dumped) lgtn run\n")),(0,r.kt)("p",null,"Keys have to be generated when launching the service. On Docker run, if the ",(0,r.kt)("a",{parentName:"p",href:"/guides/Node%20Operators/managing-the-keystore"},"keystore")," is not found, the keys are automatically generated and stored in the Docker host's ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/keystore")," directory."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Have in mind that the ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.lightning/config.toml")," is where the keystore location paths are configured, which default value is in the user ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME")," path. The users who customize or modify the default location, need to apply the required customizations. To learn more about how to manage the keystore, visit the ",(0,r.kt)("a",{parentName:"p",href:"/guides/Node%20Operators/managing-the-keystore"},"managing keystore")," section.")),(0,r.kt)("h2",{id:"generate-keys"},"Generate keys"),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys generate")," command on the container ",(0,r.kt)("inlineCode",{parentName:"p"},"lightning-cli"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker exec -it lightning-cli lgtn keys generate\n")),(0,r.kt)("p",null,"We've bound the host path ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.lightning")," into the container ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.lightning"),"."),(0,r.kt)("p",null,"You can list the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.lightning"),", where you should find the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},".\n..\nconfig.toml\nkeystore\n")),(0,r.kt)("p",null,"You only have to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys generate")," once from your host."),(0,r.kt)("p",null,"Finaly, you can start the Fleek Network node by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker start lightning-cli\n")),(0,r.kt)("h2",{id:"run-the-docker-container-as-systemd-service"},"Run the Docker Container as Systemd Service"),(0,r.kt)("p",null,"In this section we\u2019ll cover how to wrap a Docker Container as a Systemd Service without the need for third party tools or complex commands. Some reasons include, minimizing the dependency on the Docker Daemon as we can move to a ",(0,r.kt)("a",{parentName:"p",href:"https://opencontainers.org/"},"OCI complaint solution")," other that Docker at anytime, or the fact we recommend Systemd Service Units and Systemctl to control the Service in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install"},"Native install")," that most users are familiar."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Docker recommends using their cross-platform built-in restart policy for running a Container as a Service. For that, configure your Docker service to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#configure-docker-to-start-on-boot"},"start on system boot"),".")),(0,r.kt)("p",null,"Systemd was specifically developed to serve the purpose of stopping services, dependency checking and recovery of failed services. You can have your host start, stop, enable, check the status, and generally manage a container as a Systemd Service."),(0,r.kt)("h3",{id:"create-the-systemd-service-unit"},"Create the Systemd Service Unit"),(0,r.kt)("p",null,"We are going to create the unit configuration file in the /etc/systemd/system/ directory. The Service Unit is going to be named as ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-lightning.service"),". To create the file run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo touch /etc/systemd/system/docker-lightning.service\n")),(0,r.kt)("p",null,"Open the file in your favorite text editor and populate with the content found here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[Unit]\nDescription=Fleek Network Node lightning service\nAfter=docker.service\nRequires=docker.service\n\n[Service]\nRestart=always\nRestartSec=5\nTimeoutStartSec=0\nExecStartPre=-/usr/bin/docker kill lightning-cli\nExecStartPre=-/usr/bin/docker rm lightning-cli\nExecStartPre=/usr/bin/docker pull ghcr.io/fleek-network/lightning:latest\nExecStart=/usr/bin/docker run -p 4200-4299:4200-4299 -p 4300-4399:4300-4399 --mount type=bind,source=/home/skywalker/.lightning,target=/root/.lightning --name lightning-cli ghcr.io/fleek-network/lightning:latest\nExecStop=/usr/bin/docker stop\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Once the file is saved, change the file permissions by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 644 /etc/systemd/system/docker-lightning.service\n")),(0,r.kt)("p",null,"Next, reload the Systemctl Daemon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,r.kt)("p",null,"Enable the service on startup when the system boots:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable docker-lightning.service\n")),(0,r.kt)("p",null,"As a result, we are now able to run our containers as a Systemd service. For this, read the document ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install#use-systemctl-to-manage-systemd-service"},"manage systemd service")," to find more about how to control the service."),(0,r.kt)("h2",{id:"viewing-logs"},"Viewing logs"),(0,r.kt)("p",null,"To view the logs of a Docker container in real time, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker logs -f lightning-cli\n")),(0,r.kt)("p",null,"If you have wrapped the ",(0,r.kt)("a",{parentName:"p",href:"#run-the-docker-container-as-systemd-service"},"docker container as a systemd service"),", you can use the same commands found when installed natively, such as:"),(0,r.kt)("p",null,"For standard output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /var/log/lightning/output.log\n")),(0,r.kt)("p",null,"Or, the standard error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /var/log/lightning/diagnostic.log\n")),(0,r.kt)("p",null,"Learn more about how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/analyzing-logs"},"analyze log messages"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Containers are a way to have a self-contained environment that includes all necessary dependencies, libraries, software, amongst others required to run an application."),(0,r.kt)("p",null,"Fleek Network's Lightning is developed with ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),", a general-purpose programming language, that requires several dependencies and libraries to compile the project. Some of these libraries are not installed by default and require some troubleshooting for the end user. ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," provides us with containers, self-containing all the required libraries for the purpose of running Lightning, our application."),(0,r.kt)("p",null,"We guided you through the initial installation steps, and how to build a ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," image, which then's used to Docker run a container. Plus, provided lower-level commands, to help you understand other present or advanced use-cases, and also at higher level, offerring simple utility methods."),(0,r.kt)("p",null,"While we do our best to provide the clearest instructions, there's always space for improvement, therefore feel free to make any contributions by messaging us on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," or by opening a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network"},"PR")," in any of our repositories."),(0,r.kt)("p",null,"Discover more about the project by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"watching/contributing on Github"),", following us on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,r.kt)(o.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}g.isMDXComponent=!0},6733:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We recommend creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"non-root")," user with administrative privileges. It'll allow us to install any system requirements."),(0,r.kt)("p",null,"You can create a new user and add to the ",(0,r.kt)("strong",{parentName:"p"},"sudo")," group by running:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For our example, we'll be using the name ",(0,r.kt)("inlineCode",{parentName:"p"},"lgtn")," but you can pick whichever you'd like. If you already have a ",(0,r.kt)("strong",{parentName:"p"},"sudoer")," account, you can skip this step.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo adduser lgtn\n")),(0,r.kt)("p",null,"After completing the ",(0,r.kt)("inlineCode",{parentName:"p"},"adduser")," steps, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"usermod")," to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," to the ",(0,r.kt)("strong",{parentName:"p"},"sudo")," group, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo usermod -aG sudo lgtn\n")),(0,r.kt)("p",null,"Switch to the new ",(0,r.kt)("strong",{parentName:"p"},"user")," by using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"su lgtn\n")),(0,r.kt)("p",null,"Change the directory to the new user's home, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd /home/lgtn\n")))}l.isMDXComponent=!0},2915:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You have several ways of doing this:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Clone via HTTPS"),(0,r.kt)("li",{parentName:"ul"},"Clone via SSH"),(0,r.kt)("li",{parentName:"ul"},"Download via Github CLI"),(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/lightning/archive/refs/heads/main.zip"},"zip package")," from the repository")),(0,r.kt)("p",{parentName:"admonition"},"We recommend HTTPS because it is the easiest to set up in the wild, and by users who are new to all this.\nAlthough, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"here"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git <DIRECTORY-NAME>\n")),(0,r.kt)("p",{parentName:"admonition"},"At time of writing, we are checking the branch name ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet-alpha-1")," that corresponds to the testnet phase.\nHere's an example of what it'd look like when sticking to the recommended path location:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git ~/fleek-network/lightning\n"))))}l.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{image:t,name:n,title:r,url:o,communityMember:i=!1}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:o,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:o,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},r),a.createElement("span",{className:"discord"},i?"Join our community on":"Got questions? Find us on"," ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}},8597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/running-a-node-in-docker-cc0a5b3fda558b4b6dd40022fe5dd09f.png"}}]);