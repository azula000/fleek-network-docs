"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,k=u["".concat(i,".").concat(p)]||u[p]||m[p]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(3872);const o={title:"Frequently used commands for Docker setup",slug:"frequently-used-commands-for-docker-setup",hide_title:!0,tags:["commands","cli","lightning","docker"]},s=void 0,i={unversionedId:"Docker/frequently-used-commands-for-docker-setup",id:"Docker/frequently-used-commands-for-docker-setup",title:"Frequently used commands for Docker setup",description:"TL;DR",source:"@site/references/Docker/frequently-used-commands-for-docker-setup.md",sourceDirName:"Docker",slug:"/Docker/frequently-used-commands-for-docker-setup",permalink:"/references/Docker/frequently-used-commands-for-docker-setup",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Docker/frequently-used-commands-for-docker-setup.md",tags:[{label:"commands",permalink:"/references/tags/commands"},{label:"cli",permalink:"/references/tags/cli"},{label:"lightning",permalink:"/references/tags/lightning"},{label:"docker",permalink:"/references/tags/docker"}],version:"current",lastUpdatedAt:1698773084,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{title:"Frequently used commands for Docker setup",slug:"frequently-used-commands-for-docker-setup",hide_title:!0,tags:["commands","cli","lightning","docker"]},sidebar:"defaultSidebar",previous:{title:"Build and run in Docker",permalink:"/references/Docker/build-and-run-in-docker"},next:{title:"Uninstall Docker Setup",permalink:"/references/Docker/uninstall-docker-setup"}},c={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Systemctl Service Management",id:"systemctl-service-management",level:2},{value:"Enable",id:"enable",level:3},{value:"Disable",id:"disable",level:3},{value:"Start",id:"start",level:3},{value:"Stop",id:"stop",level:3},{value:"Restart",id:"restart",level:3},{value:"Status",id:"status",level:3},{value:"Lightning CLI via Docker",id:"lightning-cli-via-docker",level:2},{value:"Show keys for user config",id:"show-keys-for-user-config",level:3},{value:"Diagnostic tools",id:"diagnostic-tools",level:2},{value:"Extended verification health check",id:"extended-verification-health-check",level:3},{value:"Health status",id:"health-status",level:3},{value:"Node details",id:"node-details",level:3},{value:"Analyzing Logs",id:"analyzing-logs",level:2},{value:"Standard output",id:"standard-output",level:3},{value:"Standard error",id:"standard-error",level:3},{value:"Docker Container Logs",id:"docker-container-logs",level:3},{value:"Interactive Container",id:"interactive-container",level:2},{value:"Execute Bash",id:"execute-bash",level:3},{value:"Docker",id:"docker",level:2},{value:"List Containers",id:"list-containers",level:3},{value:"Start Container",id:"start-container",level:3},{value:"Stop Container",id:"stop-container",level:3},{value:"Remove Container",id:"remove-container",level:3}],u={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Most assisted processes are available through the ",(0,r.kt)("inlineCode",{parentName:"p"},"get.fleek.network")," command, where you can select to install, do a health check amongst others."),(0,r.kt)("p",null,"To access the menu options run the command in the shell prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.fleek.network | bash\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For Native setup users read the corresponding version in the section ",(0,r.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/frequently-used-commands-for-native-setup"},"Frequently Used Commands for Native Setup"))),(0,r.kt)("h2",{id:"systemctl-service-management"},"Systemctl Service Management"),(0,r.kt)("h3",{id:"enable"},"Enable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable docker-lightning\n")),(0,r.kt)("h3",{id:"disable"},"Disable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable docker-lightning\n")),(0,r.kt)("h3",{id:"start"},"Start"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start docker-lightning\n")),(0,r.kt)("h3",{id:"stop"},"Stop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop docker-lightning\n")),(0,r.kt)("h3",{id:"restart"},"Restart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart docker-lightning\n")),(0,r.kt)("h3",{id:"status"},"Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status docker-lightning\n")),(0,r.kt)("h2",{id:"lightning-cli-via-docker"},"Lightning CLI via Docker"),(0,r.kt)("h3",{id:"show-keys-for-user-config"},"Show keys for user config"),(0,r.kt)("p",null,"Show the keys by running the sub-commands ",(0,r.kt)("inlineCode",{parentName:"p"},"keys show")," and declaring the configuration file location (in-docker pathname):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker exec -it lightning-node lgtn -c /home/lgtn/.lightning/config.toml keys show\n")),(0,r.kt)("h2",{id:"diagnostic-tools"},"Diagnostic tools"),(0,r.kt)("h3",{id:"extended-verification-health-check"},"Extended verification health check"),(0,r.kt)("p",null,"The command show be executed from host and not in-Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sS https://get.fleek.network/healthcheck | bash\n")),(0,r.kt)("h3",{id:"health-status"},"Health status"),(0,r.kt)("p",null,"The command show be executed from host and not in-Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -w "\\n" localhost:4230/health\n')),(0,r.kt)("h3",{id:"node-details"},"Node details"),(0,r.kt)("p",null,"The command show be executed from host and not in-Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sS https://get.fleek.network/node_details | bash\n")),(0,r.kt)("h2",{id:"analyzing-logs"},"Analyzing Logs"),(0,r.kt)("h3",{id:"standard-output"},"Standard output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /var/log/lightning/output.log\n")),(0,r.kt)("h3",{id:"standard-error"},"Standard error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /var/log/lightning/diagnostic.log\n")),(0,r.kt)("h3",{id:"docker-container-logs"},"Docker Container Logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker logs -f lightning-node\n")),(0,r.kt)("h2",{id:"interactive-container"},"Interactive Container"),(0,r.kt)("h3",{id:"execute-bash"},"Execute Bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker exec -it lightning-node bash\n")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("h3",{id:"list-containers"},"List Containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker ps -a\n")),(0,r.kt)("h3",{id:"start-container"},"Start Container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker start <CONTAINER ID or CONTAINER NAME>\n")),(0,r.kt)("h3",{id:"stop-container"},"Stop Container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker stop <CONTAINER ID or CONTAINER NAME>\n")),(0,r.kt)("h3",{id:"remove-container"},"Remove Container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker rm <CONTAINER ID or CONTAINER NAME>\n")),(0,r.kt)(l.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}p.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{image:t,name:n,title:r,url:l,communityMember:o=!1}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:l,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:l,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},r),a.createElement("span",{className:"discord"},o?"Join our community on":"Got questions? Find us on"," ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);