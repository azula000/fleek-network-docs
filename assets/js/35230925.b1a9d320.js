"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={draft:!1,title:"Developers",sidebarCollapsible:!1,date:new Date("2023-01-10T09:00:00.000Z"),description:"Welcome to the documentation site for Fleek Network, the decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek Network"]},i=void 0,l={unversionedId:"learn/developers",id:"learn/developers",title:"Developers",description:"Welcome to the documentation site for Fleek Network, the decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer.",source:"@site/docs/learn/developers.md",sourceDirName:"learn",slug:"/learn/developers",permalink:"/docs/learn/developers",draft:!1,tags:[{label:"Edge Platform",permalink:"/docs/tags/edge-platform"},{label:"CDN",permalink:"/docs/tags/cdn"},{label:"Guide",permalink:"/docs/tags/guide"},{label:"Learn",permalink:"/docs/tags/learn"},{label:"Fleek Network",permalink:"/docs/tags/fleek-network"}],version:"current",frontMatter:{draft:!1,title:"Developers",sidebarCollapsible:!1,date:"2023-01-10T09:00:00.000Z",description:"Welcome to the documentation site for Fleek Network, the decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer.",category:"Documentation",keywords:["services","documentation","getting started"],tags:["Edge Platform","CDN","Guide","Learn","Fleek Network"]},sidebar:"docs",previous:{title:"Services",permalink:"/docs/learn/services"},next:{title:"Overview",permalink:"/docs/node/overview"}},s={},c=[{value:"Developer in Fleek Network - Current State",id:"developer-in-fleek-network---current-state",level:2},{value:"How can you Start Getting Involved Today?",id:"how-can-you-start-getting-involved-today",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This documentation is currently placeholder as the team prepares for an early testnet release around the month of August, where full documentation for node runners and services will release.")),(0,o.kt)("h2",{id:"developer-in-fleek-network---current-state"},"Developer in Fleek Network - Current State"),(0,o.kt)("p",null,"As a developer, you will be able to build or use services running on Fleek Network's decentralized edge infrastructure."),(0,o.kt)("p",null,"This will be possible ",(0,o.kt)("strong",{parentName:"p"},"after our initial Testnet rollouts in August, and after we publish our Service Development Kit (SDK) for service development"),". Currently we are finalizing the core developments of the protocol and setting the foundations for the testnet release."),(0,o.kt)("h2",{id:"how-can-you-start-getting-involved-today"},"How can you Start Getting Involved Today?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get familiar with the project ",(0,o.kt)("a",{parentName:"li",href:"https://whitepaper.fleek.network"},"with our Whitepaper"),"."),(0,o.kt)("li",{parentName:"ol"},"Review our open-source ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/lightning/"},"codebase on Github"),"."),(0,o.kt)("li",{parentName:"ol"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/services"},"services in Fleek Network.")),(0,o.kt)("li",{parentName:"ol"},"Want to run a node? Join our community ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/fleekxyz"},"in Discord to get updates when possible"),"."),(0,o.kt)("li",{parentName:"ol"},"Or sign up to the newsletter on ",(0,o.kt)("a",{parentName:"li",href:"https://fleek.network/"},"our website")," for updates.")))}p.isMDXComponent=!0}}]);