"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2564],{5032:(e,n,t)=>{t.d(n,{ZP:()=>a});var i=t(5893),o=t(1151);function s(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Node participation can be true or false (online or offline) throughout an Epoch. Participation is in a transient state when the operator requests to opt in or out, and the network has yet to end the undergoing Epoch. Once the Epoch ends, the Node participation transitions to true or false. Therefore, a Node Operator can expect a Node state to be online, offline, opted in or out during an Epoch lifetime."})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},2618:(e,n,t)=>{t.d(n,{ZP:()=>a});var i=t(5893),o=t(1151);function s(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Shutting down a Node after an Epoch can be tedious, given the remaining time an Epoch can take to end. Doing it prematurely, will cause reputation penalties, e.g. shutting down before the participation state change to offline. Therefore, a shutdown utility is available in the ",(0,i.jsx)(n.strong,{children:"Tools"})," menu option of ",(0,i.jsx)(n.code,{children:"get.fleek.network"}),"."]}),(0,i.jsx)(n.p,{children:"To access it, execute the command:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"curl https://get.fleek.network | bash\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},5468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var i=t(5893),o=t(1151),s=t(3872),a=t(5032),r=t(2618);const l={title:"Lightning CLI",slug:"lightning-cli",hide_title:!0,tags:["command line interface","cli","lightning","lgtn"]},c=void 0,d={id:"node/lightning-cli",title:"Lightning CLI",description:"The Lightning CLI provides a wide range of capabilities, including running the node, accessing key management utilities, network participation management and printing the loaded configuration.",source:"@site/docs/node/lightning-cli.md",sourceDirName:"node",slug:"/node/lightning-cli",permalink:"/docs/node/lightning-cli",draft:!1,unlisted:!1,tags:[{label:"command line interface",permalink:"/docs/tags/command-line-interface"},{label:"cli",permalink:"/docs/tags/cli"},{label:"lightning",permalink:"/docs/tags/lightning"},{label:"lgtn",permalink:"/docs/tags/lgtn"}],version:"current",frontMatter:{title:"Lightning CLI",slug:"lightning-cli",hide_title:!0,tags:["command line interface","cli","lightning","lgtn"]},sidebar:"docs",previous:{title:"Systemd Service",permalink:"/docs/node/systemd-service"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},h={},p=[{value:"Commands",id:"commands",level:2},{value:"Run",id:"run",level:3},{value:"Keys",id:"keys",level:3},{value:"Opt",id:"opt",level:3},{value:"Print-config",id:"print-config",level:3},{value:"Options",id:"options",level:2},{value:"Help",id:"help",level:2},{value:"Find help for a specific option",id:"find-help-for-a-specific-option",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Lightning CLI provides a wide range of capabilities, including running the node, accessing key management utilities, network participation management and printing the loaded configuration."}),"\n",(0,i.jsxs)(n.p,{children:["Its user-friendly interface provides detailed information about each command through the ",(0,i.jsx)(n.strong,{children:"help"})," sub-command, making it easy to navigate and operate efficiently."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["A quick reference of frequently used commands are available for ",(0,i.jsx)(n.a,{href:"/references/Lightning%20CLI/frequently-used-commands-for-native-setup",children:"native"})," and ",(0,i.jsx)(n.a,{href:"/references/Docker/frequently-used-commands-for-docker-setup",children:"docker"})," setups."]})}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.p,{children:"The commands are the interface in which users enter specific commands and options for the Fleek Network to process."}),"\n",(0,i.jsx)(n.h3,{id:"run",children:"Run"}),"\n",(0,i.jsxs)(n.p,{children:["The command to ",(0,i.jsx)(n.strong,{children:"run"})," allows you to start the node process in Fleek Network."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's a basic example of how to ",(0,i.jsx)(n.strong,{children:"run"})," a node with default settings:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn run\n"})}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, the default setup provided by the ",(0,i.jsx)(n.strong,{children:"get.fleek.network"})," assisted installer is quite verbose and explicitly defines the configuration path."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn -c /home/user/customPath/config.toml -vv run\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keys",children:"Keys"}),"\n",(0,i.jsxs)(n.p,{children:["Key management utilities to ",(0,i.jsx)(n.strong,{children:"show"})," (print the node's public keys) or ",(0,i.jsx)(n.strong,{children:"generate"})," private keys. For example, to generate new private keys execute:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn keys generate\n"})}),"\n",(0,i.jsx)(n.p,{children:"Two private keys are created in the signer configuration paths defined in the configuration (default ~/.lightning/config.toml)."}),"\n",(0,i.jsx)(n.p,{children:"For example, if the configuration file declares the signer consensus_key_path and node_key_path as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'[signer]\nconsensus_key_path = "/home/<USERNAME>/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/<USERNAME>/.lightning/keystore/node.pem"\n'})}),"\n",(0,i.jsx)(n.p,{children:"The private keys will be placed in the corresponding locations, as defined for the consensus_key_path (/home/<USERNAME>/.lightning/consensus.pem) and node_key_path (/home/<USERNAME>/.lightning/node.pem) file paths."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The <USERNAME> is a placeholder for the actual system username. So, make sure that you have declared the correct path corresponding to your preferred system username."})}),"\n",(0,i.jsx)(n.h3,{id:"opt",children:"Opt"}),"\n",(0,i.jsx)(n.p,{children:"The Opt command allows the user to opt into or out of Network participation."}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsxs)(n.p,{children:["To opt-in, use the subcommand ",(0,i.jsx)(n.strong,{children:"in"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn opt in\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once successful, you will receive a confirmation text message as feedback, notifying you of your inclusion in the next Epoch."}),"\n",(0,i.jsxs)(n.p,{children:["Opt-out of network participation by using ",(0,i.jsx)(n.strong,{children:"out"})," (note that this command should be sent before shutting down the node to avoid reputation penalties). Similarly, should shutdown only after the Epoch ends to mitigate any participation faults."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn opt out\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"To prevent any negative impact on the node's reputation, it's advisable to wait until the end of the Epoch (~24h) before shutting down the node when opting out."})}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsxs)(n.p,{children:["To query the node participation status in the network, use the subcommand ",(0,i.jsx)(n.strong,{children:"status"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn opt status\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Network participation control can be carried out regardless of whether the node is started or online."})}),"\n",(0,i.jsx)(n.h3,{id:"print-config",children:"Print-config"}),"\n",(0,i.jsx)(n.p,{children:"Print the loaded configuration."}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.p,{children:"The Options flags allows further control or override default settings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-c"}),", or ",(0,i.jsx)(n.code,{children:"--config"}),", path to the toml configuration file which defaults to ~/.lightning/config.toml"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--with-mock-consensus"}),", determines use of mock consensus backend"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--with-console"}),", enable the Tokio Console asynchronous debugger"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--with-log-locations"}),", enable code locations when printing logs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-v"}),", increases the level of verbosity (the max level is -vvv)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"help",children:"Help"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn help\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Usage: lgtn [OPTIONS] <COMMAND>\n\nCommands:\n  run           Run the full node\n  keys          Key management utilities\n  opt           Opt into or opt out of network participation\n  print-config  Print the loaded configuration\n  help          Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n      --with-console         Enable the Tokio Console asynchronous debugger\n      --with-log-locations   Enable code locations when printing logs\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n  -h, --help                 Print help\n  -V, --version              Print version\n"})}),"\n",(0,i.jsx)(n.h3,{id:"find-help-for-a-specific-option",children:"Find help for a specific option"}),"\n",(0,i.jsxs)(n.p,{children:["Use the subcommand ",(0,i.jsx)(n.code,{children:"help"})," after the ",(0,i.jsx)(n.code,{children:"command"}),". Here's an example to find help for the command ",(0,i.jsx)(n.strong,{children:"keys"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn keys help\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Key management utilities\n\nUsage: lgtn keys [OPTIONS] <COMMAND>\n\nCommands:\n  show      Print the node's public keys\n  generate  Generate new private keys. This command will fail if the keys already exist\n  help      Print this message or the help of the given subcommand(s)\n\nOptions:\n  -c, --config <CONFIG>      Path to the toml configuration file [default: ~/.lightning/config.toml]\n      --with-mock-consensus  Determines that we should be using the mock consensus backend\n      --with-console         Enable the Tokio Console asynchronous debugger\n      --with-log-locations   Enable code locations when printing logs\n  -v...                      Increases the level of verbosity (the max level is -vvv)\n  -h, --help                 Print help\n"})}),"\n",(0,i.jsx)(s.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},3872:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var i=t(5893);const o=e=>{let{image:n,name:t,title:o,url:s,communityMember:a=!1}=e;return(0,i.jsx)("section",{className:"author_card",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"avatar",children:(0,i.jsx)("a",{href:s,target:"_blank",alt:t,children:(0,i.jsx)("img",{src:n,alt:t})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"name",children:(0,i.jsx)("a",{href:s,target:"_blank",alt:t,children:t})}),(0,i.jsx)("span",{className:"title",children:o}),(0,i.jsxs)("span",{className:"discord",children:[a?"Join our community on":"Got questions? Find us on"," ",(0,i.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);