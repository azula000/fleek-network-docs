"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2702],{5894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=t(5893),i=t(1151),r=t(3872),s=t(3183),a=t(5032);const l={template:"post",draft:!1,hide_title:!0,title:"Getting Started",slug:"getting-started",date:new Date("2023-08-31T23:00:00.000Z"),image:"./assets/getting-started.png?202311181211",canonical:"",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",category:"Tutorial",tags:["Edge computing","Guide","Getting Started"]},d=void 0,c={id:"Node Operators/getting-started-guide",title:"Getting Started",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",source:"@site/guides/Node Operators/getting-started-guide.md",sourceDirName:"Node Operators",slug:"/Node Operators/getting-started",permalink:"/guides/Node Operators/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/getting-started-guide.md",tags:[{label:"Edge computing",permalink:"/guides/tags/edge-computing"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"}],version:"current",lastUpdatedAt:1705684266,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"Getting Started",slug:"getting-started",date:"2023-08-31T23:00:00.000Z",image:"./assets/getting-started.png?202311181211",canonical:"",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",category:"Tutorial",tags:["Edge computing","Guide","Getting Started"]},sidebar:"defaultSidebar",previous:{title:"About guides",permalink:"/guides/"},next:{title:"How to manage log files",permalink:"/guides/Node Operators/how-to-manage-log-files"}},h={image:t(3483).Z},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Need a quick Fleek Network TL;DR?",id:"need-a-quick-fleek-network-tldr",level:2},{value:"Why is Fleek Network needed?",id:"why-is-fleek-network-needed",level:2},{value:"How Does Fleek Network Work?",id:"how-does-fleek-network-work",level:2},{value:"Running a Node",id:"running-a-node",level:2},{value:"Clone the source code",id:"clone-the-source-code",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Build",id:"build",level:3},{value:"Network participation",id:"network-participation",level:3},{value:"Node Launch",id:"node-launch",level:3},{value:"Health check",id:"health-check",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Getting started guide",src:t(7860).Z+"",width:"1450",height:"816"})}),"\n","\n","\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"For this guide, we\u2019ll have a simple look into how Fleek Network works in its current development phase and briefly share some of the core concepts like spinning up a node."}),"\n",(0,o.jsx)(n.p,{children:"For those seeking advanced knowledge:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Read our ",(0,o.jsx)(n.a,{href:"/docs/whitepaper",children:"whitepaper"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Check out ",(0,o.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"our open-source code"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you find any typos in our documentation, feel free to ",(0,o.jsx)(n.a,{href:"https://discord.gg/fleek",children:"provide us feedback"})," or contribute by opening a PR in our repository ",(0,o.jsx)(n.a,{href:"https://github.com/fleek-network/fleek-network-docs/",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,o.jsx)(n.p,{children:"To follow the guide, you will need the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Familiarity with the command-line interface"}),"\n",(0,o.jsx)(n.li,{children:"Git"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"need-a-quick-fleek-network-tldr",children:"Need a quick Fleek Network TL;DR?"}),"\n",(0,o.jsx)(n.p,{children:"Fleek Network is an open-source edge computing platform to accelerate the development and execution of the next generation of web services."}),"\n",(0,o.jsx)(n.p,{children:"The system is built on a distributed network of nodes, where services run within a fair and incentivized ecosystem constituted by an open community of developers and operators. It relies on blockchain technology at its core, allowing governance and token rewards as incentives for participation in serving the network."}),"\n",(0,o.jsx)(n.p,{children:"Made by an open community that's free to operate nodes or build services without the need for approvals, permissions, or intermediaries. Or simply, consume Fleek Network resources on demand, from anywhere, provided by services running on the edge."}),"\n",(0,o.jsx)(n.p,{children:"Applications, platforms and protocols build and utilize decentralized services on the Fleek Network to optimize performance and reduce dependency on typical centralized cloud providers and corporate infrastructure."}),"\n",(0,o.jsx)(n.p,{children:"Developers can build faster and launch better products by offloading parts of the development stack to the edge to focus on core features for the value proposition of the services being developed."}),"\n",(0,o.jsxs)(n.p,{children:["To get started, install a Network Node in a ",(0,o.jsx)(n.a,{href:"/docs/node/requirements",children:"supported"})," Linux server, such as Debian or Ubuntu (latest) by utilizing our simple ",(0,o.jsx)(n.a,{href:"/docs/node/install#assisted-installer",children:"assisted installer"})," to help onboard as quickly as possible."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Our network is open to everyone, so you're more than welcome to join us anytime without any restrictions, permission or formalities. We'd be happy to have you as part of our community!"})}),"\n",(0,o.jsx)(n.p,{children:"Once connected to the server, open a terminal window and execute the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"curl https://get.fleek.network | bash\n"})}),"\n",(0,o.jsx)(n.p,{children:"Follow the install assistant recommendations to have the node ready without hassle and as quickly as possible."}),"\n",(0,o.jsx)(n.h2,{id:"why-is-fleek-network-needed",children:"Why is Fleek Network needed?"}),"\n",(0,o.jsx)(n.p,{children:"Web3 products typically rely on centralized cloud infrastructure, which is vulnerable to attacks as computation and data can be easily manipulated to suit business goals. However, blockchain technology has paved the way for a new era of decentralized cloud computing and data storage. The Fleek Network offers a sustainable alternative to traditional centralized architectures, providing a secure, transparent, and accessible decentralized edge computing future for everyone."}),"\n",(0,o.jsx)(n.h2,{id:"how-does-fleek-network-work",children:"How Does Fleek Network Work?"}),"\n",(0,o.jsx)(n.p,{children:"When a client requests a service, the protocol determines the best route to the nodes where the service replicas and workload are allocated."}),"\n",(0,o.jsx)(n.p,{children:"Once the computation is successful, the data streaming routes to the client. On-client request fulfillment, a proof of delivery is generated containing cryptographically secured metadata about the original request, any parts involved and the resources consumed."}),"\n",(0,o.jsx)(n.p,{children:"The Delivery Acknowledgements are stored locally in the participating node memory pools, rolled up to the protocol consensus consistently throughout the Epoch. This agreement is formed by a random committee of any healthy Nodes that use the information provided to reward the Nodes fairly."}),"\n",(0,o.jsx)(n.h2,{id:"running-a-node",children:"Running a Node"}),"\n",(0,o.jsxs)(n.p,{children:["A Fleek Network node can be built and run on your machine. It\u2019s an ",(0,o.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"open-source project"})," and is open for contributions."]}),"\n",(0,o.jsx)(n.p,{children:"The project is written with Rust, a general-purpose programming language that you need to have installed in advance to be able to follow the current guide."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["To set up Rust, packages and library dependencies can be tricky. The quickest is to visit the ",(0,o.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup.rs"}),". Alternatively, if you haven't already, the build section has a ",(0,o.jsx)(n.a,{href:"/docs/node/install#manual-installation",children:"manual installation"})," document to help."]})}),"\n",(0,o.jsx)(n.h3,{id:"clone-the-source-code",children:"Clone the source code"}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ll clone the repository locally, build it and interact with the node through the binary or the HTTP JSON-RPC API with a client like cURL, but you can use a GUI (Postman, Insomnia, amongst others) if you prefer."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The ~/fleek-network/lightning or $HOME/fleek-network/lightning directory is the default or recommended location to store the repository. If you like to follow conventions, then is best to stick with the recommendation, to avoid confusion and make it easier to follow our documentation."})}),"\n",(0,o.jsxs)(n.p,{children:["Start by cloning the repository located at ",(0,o.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"https://github.com/fleek-network/lightning"})]}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.p,{children:"Once the git clone completes, you\u2019ll have the latest version at the time of cloning. You should use git to fetch or pull the latest versions consequently."}),"\n",(0,o.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsx)(n.p,{children:"Install the required dependencies necessary for compiling general software and for our use-case Lightning CLI."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"sudo apt-get install \\\n    build-essential \\\n    clang \\\n    pkg-config \\\n    libssl-dev \\\n    gcc-multilib \\\n    protobuf-compiler\n"})}),"\n",(0,o.jsx)(n.h3,{id:"build",children:"Build"}),"\n",(0,o.jsxs)(n.p,{children:["Start by changing the directory to the project directory where the source code is stored. If you have followed the recommended location that'll be ",(0,o.jsx)(n.code,{children:"~/fleek-network/lightning"}),", as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"cd ~/fleek-network/lightning\n"})}),"\n",(0,o.jsx)(n.p,{children:"Run the Rust package manager clean and update commands."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"cargo clean\ncargo update\n"})}),"\n",(0,o.jsx)(n.p,{children:"Next, execute the build command to compile the Fleek Network Lightning CLI binary."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"cargo +stable install --locked --path core/cli --features services\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"The build command uses the Rust compiler, which might take a while depending on how speedy the host machine is capable."})}),"\n",(0,o.jsxs)(n.p,{children:["Once the Rust compiler completes, the generated binary will be available in the source code project directory. If you stick with the default, that'll look like ",(0,o.jsx)(n.code,{children:"~/.cargo/bin/lightning-node"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To avoid having to specify the pathname every time, create a symbolic link to keep it short. Here we'll name the process as the global ",(0,o.jsx)(n.code,{children:"lgtn"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'sudo ln -s "~/.cargo/bin/lightning-node" /usr/local/bin/lgtn\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Run the CLI with the flag ",(0,o.jsx)(n.code,{children:"version"})," to confirm it's available globally."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"lgtn --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"The output should look like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"Usage: lgtn [OPTIONS] <COMMAND>\n\nCommands:\n  run             Start the node\n  keys            Handle keys\n  print-config    Print the loaded configuration\n  dev-init-only   Initialize the node without starting it\n  dev-dump-graph  Dump the infusion graph of the node instance\n  help            Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n      --log-location         Print code location on console logs\n  -h, --help                 Print help\n  -V, --version              Print version\n"})}),"\n",(0,o.jsx)(n.h3,{id:"network-participation",children:"Network participation"}),"\n",(0,o.jsx)(n.p,{children:"The Node Operator has to explicitly opt-in for a node to participate in the Network, regardless of whether the node Lightning Service is running."}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.p,{children:"To make an opt-in request, the operator should execute the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"lgtn opt in\n"})}),"\n",(0,o.jsx)(n.p,{children:"Upon success, the operator receives a confirmation text message about the node inclusion in the next Epoch."}),"\n",(0,o.jsx)(n.h3,{id:"node-launch",children:"Node Launch"}),"\n",(0,o.jsxs)(n.p,{children:["After ",(0,o.jsx)(n.a,{href:"#build",children:"building"}),", the node can be launched by running the subcommand ",(0,o.jsx)(n.code,{children:"run"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"lgtn run\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"It's highly recommend to use systemd to manage the Fleek Network service for node operators. Systemd is a system and service manager for Linux operating systems that provides a consistent way to manage system services across various distributions."})}),"\n",(0,o.jsxs)(n.p,{children:["Learn how to create a new Systemd service in the ",(0,o.jsx)(n.a,{href:"/docs/node/install#manual-installation",children:"manual installation"})," document."]}),"\n",(0,o.jsx)(n.h3,{id:"health-check",children:"Health check"}),"\n",(0,o.jsx)(n.p,{children:"It's important for Node operators to regularly check on the health of their resources to make sure everything is running smoothly. By doing this, they can get helpful feedback and know for sure if their Node is up and running. Some experienced node operators even automate this process using cronjobs and get reports sent to them via email or other custom methods."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'curl -w "\\n" localhost:4230/health\n'})}),"\n",(0,o.jsx)(n.p,{children:"If everything goes well, the response should be:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"OK\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, use the JSON-RPC method ",(0,o.jsx)(n.code,{children:"flk_ping"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'curl -s \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n        "jsonrpc": "2.0",\n        "method": "flk_ping",\n        "params": [],\n        "id": 1\n        }\' \\\n    localhost:4230/rpc/v0\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Which response should return the key ",(0,o.jsx)(n.code,{children:"result"})," with value ",(0,o.jsx)(n.code,{children:"pong"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'{\n    "jsonrpc": "2.0",\n    "result": "pong",\n    "id": 1\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(n.p,{children:"While you can run the Network Node as described here, it's required to set up the Network Node correctly and securely! It requires some degree of patience, knowledge and time to go through our guides, but we'll provide some guides and references to help you manage your network node server!"}),"\n",(0,o.jsxs)(n.p,{children:["To avoid having to go through all the steps manually, we recommend reading our ",(0,o.jsx)(n.a,{href:"/docs/node/install#assisted-installer",children:"assisted installer"})," document for quick onboarding."]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"We introduced Fleek Network as an open-source edge computing platform to help us accelerate the development and execution of the next generation of web services."}),"\n",(0,o.jsx)(n.p,{children:"We have learned a bit about the importance of a decentralized edge computing network to reach and fulfill the future of computation and how the Fleek Network protocol works succinctly."}),"\n",(0,o.jsx)(n.p,{children:"Furthermore, we guide you through a step-by-step installation of the network node process, where we pull the source code, build the binary and launch the service."}),"\n",(0,o.jsx)(n.p,{children:"Finally, we do a quick health check to confirm the status of our node."}),"\n",(0,o.jsxs)(n.p,{children:["Discover more about the project by ",(0,o.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"watching/contributing on GitHub"}),", following us on ",(0,o.jsx)(n.a,{href:"https://twitter.com/fleek_net",children:"Twitter"}),", and joining ",(0,o.jsx)(n.a,{href:"https://discord.gg/fleek",children:"our community Discord"})," for any updates."]}),"\n",(0,o.jsx)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3183:(e,n,t)=>{t.d(n,{ZP:()=>s});var o=t(5893),i=t(1151);function r(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"You have several ways of doing this:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Clone via HTTPS"}),"\n",(0,o.jsx)(n.li,{children:"Clone via SSH"}),"\n",(0,o.jsx)(n.li,{children:"Download via Github CLI"}),"\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)(n.a,{href:"https://github.com/fleek-network/lightning/archive/refs/heads/main.zip",children:"zip package"})," from the repository"]}),"\n"]}),(0,o.jsxs)(n.p,{children:["We recommend HTTPS because it is the easiest to set up in the wild, and by users who are new to all this.\nAlthough, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh",children:"here"}),"."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git <DIRECTORY-NAME>\n"})}),(0,o.jsxs)(n.p,{children:["At time of writing, we are checking the branch name ",(0,o.jsx)(n.code,{children:"testnet-alpha-1"})," that corresponds to the testnet phase.\nHere's an example of what it'd look like when sticking to the recommended path location:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git ~/fleek-network/lightning\n"})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},5032:(e,n,t)=>{t.d(n,{ZP:()=>s});var o=t(5893),i=t(1151);function r(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"Node participation can be true or false (online or offline) throughout an Epoch. Participation is in a transient state when the operator requests to opt in or out, and the network has yet to end the undergoing Epoch. Once the Epoch ends, the Node participation transitions to true or false. Therefore, a Node Operator can expect a Node state to be online, offline, opted in or out during an Epoch lifetime."}),(0,o.jsxs)(n.p,{children:["Before starting the service, make sure to opt-in or opt-out of network participation, through the available subcommand ",(0,o.jsx)(n.strong,{children:"opt"})," in the CLI."]}),(0,o.jsx)(n.p,{children:"The quickest way to find help is to run the help subcommand as follows:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"lgtn opt help\n"})}),(0,o.jsxs)(n.p,{children:["To learn more, read the ",(0,o.jsx)(n.a,{href:"/docs/node/lightning-cli",children:"Lightning-CLI"})," section for command ",(0,o.jsx)(n.a,{href:"/docs/node/lightning-cli#opt",children:"opt"}),"."]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},3872:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var o=t(5893);const i=e=>{let{image:n,name:t,title:i,url:r,communityMember:s=!1}=e;return(0,o.jsx)("section",{className:"author_card",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"avatar",children:(0,o.jsx)("a",{href:r,target:"_blank",alt:t,children:(0,o.jsx)("img",{src:n,alt:t})})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"name",children:(0,o.jsx)("a",{href:r,target:"_blank",alt:t,children:t})}),(0,o.jsx)("span",{className:"title",children:i}),(0,o.jsxs)("span",{className:"discord",children:[s?"Join our community on":"Got questions? Find us on"," ",(0,o.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},3483:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/getting-started-e00548e77105d1efbb6c436314fca278.png"},7860:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/getting-started-e00548e77105d1efbb6c436314fca278.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);