"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={draft:!1,title:"Roadmap",date:new Date("2023-01-10T09:00:00.000Z"),description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",category:"Documentation",keywords:["roadmap"],tags:["Roadmap","Fleek Network"]},l=void 0,i={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,tags:[{label:"Roadmap",permalink:"/docs/tags/roadmap"},{label:"Fleek Network",permalink:"/docs/tags/fleek-network"}],version:"current",frontMatter:{draft:!1,title:"Roadmap",date:"2023-01-10T09:00:00.000Z",description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",category:"Documentation",keywords:["roadmap"],tags:["Roadmap","Fleek Network"]},sidebar:"docs",previous:{title:"Install",permalink:"/docs/node/Install"},next:{title:"Code of Conduct",permalink:"/docs/Open-source/code-of-conduct"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Current state: Road to Testnet",id:"current-state-road-to-testnet",level:2},{value:"Phases 0 to 5",id:"phases-0-to-5",level:3},{value:"Mainnet",id:"mainnet",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Instead of restricting our network architecture/capabilities to a CDN service, Fleek Network's core was redesigned to support a fully decentralized edge platform upon which many edge services e.g. CDN, serverless functions, amongst others, can be built. The new architecture separates each aspect of the network (blockchain - edge infrastructure - services) so that anyone can build new edge services on Fleek Network."),(0,r.kt)("p",null,"Several milestones were completed toward our next early Testnet goal: the whitepaper was launched, and the Github repo was published. "),(0,r.kt)("p",null,"For a complete description of our testnet plans, road to mainnet, and testnet participation initiatives, read the following ",(0,r.kt)("a",{parentName:"p",href:"https://blog.fleek.network/post/fleek-network-testnet-plans/"},"blog post"),"."),(0,r.kt)("h2",{id:"current-state-road-to-testnet"},"Current state: Road to Testnet"),(0,r.kt)("p",null,"Our current roadmap on the road to an early testnet stands as follows, currently in *",(0,r.kt)("em",{parentName:"p"},"Phase {0}"),":"),(0,r.kt)("h3",{id:"phases-0-to-5"},"Phases 0 to 5"),(0,r.kt)("p",null,"Fleek Network will utilize a multi-phase approach to rolling out mainnet. The current high-level plan, set out below, depends on a variety of factors and may change in response to development timelines and/or data/feedback collected throughout the different phases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 0 (September 5th): Node Rollout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Initial network and node testing (performance, hardware specs, clustering, costs, metrics, etc.)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 1 (mid-late September): SDK/Service Rollout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Introduce the SDK and test the building and utilizing of services on the network, as well as some optimizations based on Phase 0."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 2 (October):")," ",(0,r.kt)("strong",{parentName:"li"},"Initial Economics Rollout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Introduce and test a more concrete version of the economic algorithm, including staking, pricing, and other elements/situations using test (valueless) tokens, as well as some optimizations based on Phase 1."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 3 (November): Layer 2 Contracts Rollout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Introduce a test version of the aspects of the protocol that will live on an Ethereum L2 (staking, deposit and token contracts, communication between L2/FN, etc)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 4 (December):")," ",(0,r.kt)("strong",{parentName:"li"},"Final Rollout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Introduce the final form of the first generation of the network, based on all data/feedback and optimizations throughout all the phases, and allow testing of what a realistic mainnet environment will be like."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Phase 5 (Q1 2024):")," ",(0,r.kt)("strong",{parentName:"li"},"Mainnet Launch"))),(0,r.kt)("p",null,"The goals for all stages involve completing and revising the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Network performance"),(0,r.kt)("li",{parentName:"ul"},"Hardware/node specs"),(0,r.kt)("li",{parentName:"ul"},"Sandboxing of services"),(0,r.kt)("li",{parentName:"ul"},"Packaging and pricing of initial network resources/commodities"),(0,r.kt)("li",{parentName:"ul"},"Parameters related to the FLK token"),(0,r.kt)("li",{parentName:"ul"},"Security testing/auditing"),(0,r.kt)("li",{parentName:"ul"},"Criteria for allocation of pre-mainnet community tokens")),(0,r.kt)("h2",{id:"mainnet"},"Mainnet"),(0,r.kt)("p",null,"The mainnet release of Fleek Network will come with the arrival of a stable and end-to-end tested version of the protocol. Details on the transition to mainnet will be discussed later in the future."),(0,r.kt)("p",null,"We will continue to update this roadmap in the short and long term to reflect the different stages the network goes through."))}u.isMDXComponent=!0}}]);