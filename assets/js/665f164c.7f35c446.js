"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[9320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"Testnet onboarding",slug:"testnet-onboarding",hide_title:!0,description:"Join Fleek's Testnet onboarding, follow Discord instructions to install and verify your node. Check live updates, attend community calls, and ensure node whitelist status.",tags:["testnet","onboarding","phases","getting started"],sidebarCollapsible:!1},i=void 0,s={unversionedId:"node/testnet-onboarding",id:"node/testnet-onboarding",title:"Testnet onboarding",description:"Join Fleek's Testnet onboarding, follow Discord instructions to install and verify your node. Check live updates, attend community calls, and ensure node whitelist status.",source:"@site/docs/node/testnet-onboarding.md",sourceDirName:"node",slug:"/node/testnet-onboarding",permalink:"/docs/node/testnet-onboarding",draft:!1,tags:[{label:"testnet",permalink:"/docs/tags/testnet"},{label:"onboarding",permalink:"/docs/tags/onboarding"},{label:"phases",permalink:"/docs/tags/phases"},{label:"getting started",permalink:"/docs/tags/getting-started"}],version:"current",frontMatter:{title:"Testnet onboarding",slug:"testnet-onboarding",hide_title:!0,description:"Join Fleek's Testnet onboarding, follow Discord instructions to install and verify your node. Check live updates, attend community calls, and ensure node whitelist status.",tags:["testnet","onboarding","phases","getting started"],sidebarCollapsible:!1},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/node/requirements"},next:{title:"Install",permalink:"/docs/node/Install"}},l={},d=[{value:"Testnet Onboarding",id:"testnet-onboarding",level:2},{value:"Important Discord Notes &amp; Events:",id:"important-discord-notes--events",level:2},{value:"Node whitelist verification",id:"node-whitelist-verification",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"testnet-onboarding"},"Testnet Onboarding"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," server"),(0,a.kt)("p",{parentName:"li"},"a) To get onboarded, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fleek Network Nodes")," section and follow the instructions in the ",(0,a.kt)("strong",{parentName:"p"},"#access-guide")," channel")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Learn about the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/requirements"},"required server specifications")," on which the Fleek Network Node can be installed and run.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install"},"instructions")," to install the node via the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#assisted-installer"},"assisted installer")," (easy) or ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#manual-installation"},"manually")," (advanced).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," server, visit ",(0,a.kt)("strong",{parentName:"p"},"#access-form,")," run the node commands, and submit the information in the form."))),(0,a.kt)("admonition",{title:"Important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Live information should be checked in the Fleek Network\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/965698989464887386/1148719641896693873"},"node announcements")," Discord channel. Due to the number of requests and to improve the onboarding experience, the channel or forms might have offline periods. Check the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/965698989464887386/1148719641896693873"},"node announcements")," for live updates, please!")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"The team will review your application, allowing/listing your node if approved")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When approved, you will be notified in the ",(0,a.kt)("strong",{parentName:"p"},"#access-approved")," channel on Discord and given the Node Operator role.")),(0,a.kt)("h2",{id:"important-discord-notes--events"},"Important ",(0,a.kt)("a",{parentName:"h2",href:"https://discord.gg/fleekxyz"},"Discord")," Notes & Events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All announcements for node operators will be sent to ",(0,a.kt)("strong",{parentName:"li"},"#node-announcements")),(0,a.kt)("li",{parentName:"ul"},"You can ask for help in ",(0,a.kt)("strong",{parentName:"li"},"#troubleshooting"),", or chat with the team in the ",(0,a.kt)("strong",{parentName:"li"},"#node-operators")," channel"),(0,a.kt)("li",{parentName:"ul"},"Every Friday at 3 pm EST, we will conduct Node Community Calls in ",(0,a.kt)("strong",{parentName:"li"},"#node-stage"))),(0,a.kt)("h2",{id:"node-whitelist-verification"},"Node whitelist verification"),(0,a.kt)("p",null,"You might find it useful to run the following command to verify the status of the node whitelist status\u2013since a node throws an error if not whitelisted, this can be verified by looking at and monitoring the ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostic.log")," file manually, otherwise, use the method shared here."),(0,a.kt)("p",null,"1) Connect to the server terminal where the node is installed"),(0,a.kt)("p",null,"2) Switch to the user account that was used to set up the node as recommended in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#create-a-user"},"installation guide")),(0,a.kt)("p",null,"3) Execute the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sS https://get.fleek.network/whitelist | bash\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'The node whitelist verification will verify the logs output to determine if the node has the "node whitelist" error. You can verify this manually by observing the ',(0,a.kt)("inlineCode",{parentName:"p"},"diagnostic.log"),". To learn how to check the ",(0,a.kt)("inlineCode",{parentName:"p"},"logs"),", read the section ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#analyzing-log-messages"},"analyzing log messages"),".")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We are going to be whitlisting in waves at the beginning of every epoch. Epochs are currently 30 mins (as for this period of testnet). If you have ",(0,a.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/update-cli-from-source-code"},"updated the binary"),", run the node that you applied with. While your not whitelisted your node will be checking every 5 minutes and will start when whitelisted.")))}u.isMDXComponent=!0}}]);