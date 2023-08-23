"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={draft:!1,title:"Roadmap",date:new Date("2023-01-10T09:00:00.000Z"),description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",category:"Documentation",keywords:["roadmap"],tags:["Roadmap","Fleek Network"]},i=void 0,l={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,tags:[{label:"Roadmap",permalink:"/docs/tags/roadmap"},{label:"Fleek Network",permalink:"/docs/tags/fleek-network"}],version:"current",frontMatter:{draft:!1,title:"Roadmap",date:"2023-01-10T09:00:00.000Z",description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",category:"Documentation",keywords:["roadmap"],tags:["Roadmap","Fleek Network"]},sidebar:"default",previous:{title:"Open-source",permalink:"/docs/Open-source"},next:{title:"Whitepaper",permalink:"/docs/whitepaper"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Current state: Road to Testnet",id:"current-state-road-to-testnet",level:2},{value:"August",id:"august",level:3},{value:"Mainnet",id:"mainnet",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This documentation is currently placeholder as the team prepares for an early testnet release around the month of August. The roadmap defined at the moment is heavily focused on the first early testnet release. ",(0,a.kt)("a",{parentName:"p",href:"https://blog.fleek.network/"},"Read the blog to stay up to date."))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Instead of restricting our network architecture/capabilities to a CDN service, Fleek Network's core was redesigned to support a full decentralized edge platform upon which many edge services (ex. CDN, serverless functions, etc.) can be built. The new architecture separates each aspect of the network (blockchain - edge infrastructure - services) so that anyone can build new edge services on Fleek Network."),(0,a.kt)("p",null,"Several milestones were completed towards our next early Testnet goal: the whitepaper was launched, and the Github repo was published."),(0,a.kt)("p",null,"Next will come the following milestone: our early Testnet."),(0,a.kt)("h2",{id:"current-state-road-to-testnet"},"Current state: Road to Testnet"),(0,a.kt)("p",null,"Our current roadmap on the road to an early testnet stands as follows:"),(0,a.kt)("h3",{id:"august"},"August"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testnet Launch (initial phase of a multi-phased path to Mainnet)"),(0,a.kt)("li",{parentName:"ul"},"Initial Edge Services (CDN and compute PoC services)"),(0,a.kt)("li",{parentName:"ul"},"Service Development Kit (initial release)")),(0,a.kt)("p",null,"The initial phase of testnet will have two main purposes. First, to stress test the network\u2019s general performance and operation with a decentralized network of node operators with varying hardware; Second is to test the first two POC services, which are the CDN (static and dynamic content acceleration) and a simple edge compute POC."),(0,a.kt)("p",null,"The second phase of the testnet which will happen in the first half of September (depending on when exactly the first testnet phase starts), will be to introduce the Service Development Kit (SDK) and test out people building new services on the test network."),(0,a.kt)("h2",{id:"mainnet"},"Mainnet"),(0,a.kt)("p",null,"The mainnet release of Fleek Network will come with the arrival of a stable and end-to-end tested version of the protocol. Details on the transition to mainnet will be discussed later in the future."),(0,a.kt)("p",null,"We will continue to update this roadmap in the short and long term to reflect the different stages the network goes through."))}d.isMDXComponent=!0}}]);