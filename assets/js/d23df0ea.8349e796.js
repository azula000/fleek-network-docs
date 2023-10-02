"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2915:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={toc:[]},o="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You have several ways of doing this:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Clone via HTTPS"),(0,a.kt)("li",{parentName:"ul"},"Clone via SSH"),(0,a.kt)("li",{parentName:"ul"},"Download via Github CLI"),(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/lightning/archive/refs/heads/main.zip"},"zip package")," from the repository")),(0,a.kt)("p",{parentName:"admonition"},"We recommend HTTPS because it is the easiest to set up in the wild, and by users who are new to all this.\nAlthough, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"here"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-0 https://github.com/fleek-network/lightning.git <DIRECTORY-NAME>\n")),(0,a.kt)("p",{parentName:"admonition"},"At time of writing, we are checking the branch name ",(0,a.kt)("inlineCode",{parentName:"p"},"testnet-alpha-0")," that corresponds to the testnet phase.\nHere's an example of what it'd look like when sticking to the recommended path location:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-0 https://github.com/fleek-network/lightning.git ~/fleek-network/lightning\n"))))}i.isMDXComponent=!0},2321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),l=n(3872),o=n(2915);const i={title:"Build and run in Docker",slug:"build-and-run-in-docker",hide_title:!0,tags:["references","help","docker","build","image","container"]},c=void 0,s={unversionedId:"Docker/build-and-run-in-docker",id:"Docker/build-and-run-in-docker",title:"Build and run in Docker",description:"Clone the source code locally",source:"@site/references/Docker/build-and-run-in-docker.md",sourceDirName:"Docker",slug:"/Docker/build-and-run-in-docker",permalink:"/references/Docker/build-and-run-in-docker",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Docker/build-and-run-in-docker.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"docker",permalink:"/references/tags/docker"},{label:"build",permalink:"/references/tags/build"},{label:"image",permalink:"/references/tags/image"},{label:"container",permalink:"/references/tags/container"}],version:"current",lastUpdatedAt:1696249296,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{title:"Build and run in Docker",slug:"build-and-run-in-docker",hide_title:!0,tags:["references","help","docker","build","image","container"]},sidebar:"defaultSidebar",previous:{title:"About references",permalink:"/references/"},next:{title:"Error building on ARM64",permalink:"/references/Lightning CLI/error-building-on-arm64"}},u={},d=[{value:"Clone the source code locally",id:"clone-the-source-code-locally",level:2},{value:"Change directory to Lightning source code",id:"change-directory-to-lightning-source-code",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Docker setup verification",id:"docker-setup-verification",level:2},{value:"Create the Dockerfile",id:"create-the-dockerfile",level:2},{value:"Build the Docker image",id:"build-the-docker-image",level:2},{value:"Generate keys",id:"generate-keys",level:2},{value:"Docker Container",id:"docker-container",level:2},{value:"View logs",id:"view-logs",level:2}],p={toc:d},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"clone-the-source-code-locally"},"Clone the source code locally"),(0,a.kt)(o.ZP,{mdxType:"GitCloneOptions"}),(0,a.kt)("h2",{id:"change-directory-to-lightning-source-code"},"Change directory to Lightning source code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/fleek-network/lightning\n")),(0,a.kt)("h2",{id:"install-docker"},"Install Docker"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We're using Ubuntu Linux. You'll have to make the required tweaks for your preferred Linux Distro. Find the list of support operating systems ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/requirements#server"},"here"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,a.kt)("p",null,"Next, install the required packages to let apt use packages over HTTPS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install \\\n  apt-transport-https \\\n  ca-certificates \\\n  software-properties-common\n")),(0,a.kt)("p",null,"Add the GPG key for the official Docker repository to your system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n")),(0,a.kt)("p",null,"Add the Docker repository to apt sources and update the package database with the Docker packages from the new added repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu jammy stable"\n')),(0,a.kt)("p",null,"Set to install from the Docker repo instead of the default Ubuntu repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"apt-cache policy docker-ce\n")),(0,a.kt)("p",null,"Finally, install Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install docker-ce\n")),(0,a.kt)("p",null,"Once complete you should be able to run it via the CLI, as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker -v\n")),(0,a.kt)("p",null,"Here's the output (versions might differ a bit from the time of writing):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Docker version 24.0.6, build ed223bc\n")),(0,a.kt)("h2",{id:"docker-setup-verification"},"Docker setup verification"),(0,a.kt)("p",null,"The following command's output will indicate if Docker's working correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run hello-world\n")),(0,a.kt)("p",null,'You should get a "Hello from Docker!".'),(0,a.kt)("h2",{id:"create-the-dockerfile"},"Create the Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"touch Dockerfile\n")),(0,a.kt)("p",null,"Copy and paste to the Dockerfile the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'FROM rust:latest as builder\nARG PROFILE=release\nWORKDIR /lightning\n\nRUN apt-get update\nRUN apt-get install -y \\\n    build-essential \\\n    cmake \\\n    clang \\\n    pkg-config \\\n    libssl-dev \\\n    gcc \\\n    protobuf-compiler\n\nRUN --mount=type=cache,target=/usr/local/cargo/registry \\\n    cargo install cargo-strip\n\nCOPY . .\nENV RUST_BACKTRACE=1\n\nRUN --mount=type=cache,target=/usr/local/cargo/registry \\\n    --mount=type=cache,target=/lightning/target \\\n    cargo build --profile $PROFILE --bin lightning-cli \\\n    && cargo strip \\\n    && mv /lightning/target/release/lightning-cli /lightning-cli\n\nFROM ubuntu:latest\n\nRUN DEBIAN_FRONTEND=noninteractive apt-get update -yq && \\\n  DEBIAN_FRONTEND=noninteractive apt-get install -yq \\\n    libssl-dev \\\n    ca-certificates\n\n# Get compiled binaries from builder\'s cargo install directory\nCOPY --from=builder /lightning/target/release/lightning-cli /usr/local/bin/lgtn\n\nENTRYPOINT ["lgtn", "run"]\n')),(0,a.kt)("h2",{id:"build-the-docker-image"},"Build the Docker image"),(0,a.kt)("p",null,"Build the image named as ",(0,a.kt)("inlineCode",{parentName:"p"},"lightning")," from our Dockerfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker build -t lightning -f ./Dockerfile .\n")),(0,a.kt)("h2",{id:"generate-keys"},"Generate keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker exec -it lightning-cli lgtn keys generate\n")),(0,a.kt)("h2",{id:"docker-container"},"Docker Container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run \\\n  -p 4069:4069 \\\n  -p 4200:4200 \\\n  -p 6969:6969 \\\n  -p 18000:18000 \\\n  -p 18101:18101 \\\n  -p 18102:18102 \\\n  -v $HOME/.lightning/:/root/.lightning/:rw \\\n  --name lightning-cli \\\n  -it lightning\n")),(0,a.kt)("h2",{id:"view-logs"},"View logs"),(0,a.kt)("p",null,"To view the logs of a Docker container in real time, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker logs -f lightning-cli\n")),(0,a.kt)(l.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}m.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=e=>{let{image:t,name:n,title:a,url:l,communityMember:o=!1}=e;return r.createElement("section",{className:"author_card"},r.createElement("div",null,r.createElement("span",{className:"avatar"},r.createElement("a",{href:l,target:"_blank",alt:n},r.createElement("img",{src:t,alt:n}))),r.createElement("div",null,r.createElement("span",{className:"name"},r.createElement("a",{href:l,target:"_blank",alt:n},n)),r.createElement("span",{className:"title"},a),r.createElement("span",{className:"discord"},o?"Join our community on":"Got questions? Find us on"," ",r.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);