"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[7147],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905)),a=t(3872);const o={title:"Permission denied (os error 13)",slug:"permission-denied-os-error-13",hide_title:!0,tags:["permissions"]},s=void 0,l={unversionedId:"Lightning CLI/permission-denied-os-error-13",id:"Lightning CLI/permission-denied-os-error-13",title:"Permission denied (os error 13)",description:"Ownership and file permissions",source:"@site/references/Lightning CLI/permission-denied-os-error-13.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/permission-denied-os-error-13",permalink:"/references/Lightning CLI/permission-denied-os-error-13",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/permission-denied-os-error-13.md",tags:[{label:"permissions",permalink:"/references/tags/permissions"}],version:"current",lastUpdatedAt:1696530063,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{title:"Permission denied (os error 13)",slug:"permission-denied-os-error-13",hide_title:!0,tags:["permissions"]},sidebar:"defaultSidebar",previous:{title:"Backing up the keystore",permalink:"/references/Lightning CLI/backing-up-the-keystore"},next:{title:"Uninstall Lightning Node",permalink:"/references/Lightning CLI/uninstall-lightning-node"}},d={},p=[{value:"Ownership and file permissions",id:"ownership-and-file-permissions",level:2},{value:"Override the TMPDIR",id:"override-the-tmpdir",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ownership-and-file-permissions"},"Ownership and file permissions"),(0,i.kt)("p",null,"When running the Lightning CLI, the user who's in control can delegate to ",(0,i.kt)("strong",{parentName:"p"},"root")," via ",(0,i.kt)("strong",{parentName:"p"},"sudo"),". Depending on how the Fleek Networking Lightning CLI was installed, this might cause some confusion, which is better explained by reading the reference ",(0,i.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/keys-not-found"},"Keys not found"),", which illustrates a situation where a user gets an error message about the wrong location of a system path (keystore)."),(0,i.kt)("p",null,"Some of the reasons why the ",(0,i.kt)("inlineCode",{parentName:"p"},"Permission denied (os error 13)")," might occur are related to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Fleek Network Lightning CLI process trying to write to a ",(0,i.kt)("inlineCode",{parentName:"li"},".lightning")," stored in a non permited location"),(0,i.kt)("li",{parentName:"ul"},"The Fleek Network Lightning CLI process trying to write to ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp"))),(0,i.kt)("p",null,"The most common issue can be fixed by reading the section ",(0,i.kt)("a",{parentName:"p",href:"#override-the-tmpdir"},"Override the TMPDIR"),"."),(0,i.kt)("h2",{id:"override-the-tmpdir"},"Override the TMPDIR"),(0,i.kt)("p",null,"The Fleek Network Lightning process requires writing to a temporary directory. As the process requires permissions, this might fail as demonstrated by some of the output logs we have below."),(0,i.kt)("p",null,"a) A permission denied error message"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Permission denied (os error 13)\n")),(0,i.kt)("p",null,"b) Rust panic error message which includes a permission denied"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"thread 'main' panicked at 'called Result::unwrap() on an Err value: Os { code: 13, kind: PermissionDenied, message: \"Permission denied\" }', core/node/src/cli.rs:181:18\nnote: run with RUST_BACKTRACE=1 environment variable to display a backtrace\nthread 'main' panicked at 'called Result::unwrap() on an Err value: Os { code: 13, kind: PermissionDenied, message: \"Permission denied\" }', core/node/src/cli.rs:181:18\nnote: run with RUST_BACKTRACE=1 environment variable to display a backtrace\nthread 'main' panicked at 'called Result::unwrap() on an Err value: Os { code: 13, kind: PermissionDenied, message: \"Permission denied\" }', core/node/src/cli.rs:181:18\nnote: run with RUST_BACKTRACE=1 environment variable to display a backtrace\nthread 'main' panicked at 'called Result::unwrap() on an Err value: Os { code: 13, kind: PermissionDenied, message: \"Permission denied\" }', core/node/src/cli.rs:181:18\nnote: run with RUST_BACKTRACE=1 environment variable to display a backtrace\nthread 'main' panicked at 'called Result::unwrap() on an Err value: Os { code: 13, kind: PermissionDenied, message: \"Permission denied\" }', core/node/src/cli.rs:181:18\nnote: run with RUST_BACKTRACE=1 environment variable to display a backtrace\n")),(0,i.kt)("p",null,"c) A trace showing the path where this has failed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'[00007fcbe168e764] openat(AT_FDCWD, "/tmp/lightning.log", O_WRONLY|O_CREAT|O_APPEND|O_CLOEXEC, 0666) = -1 EACCES (Permission denied)\n[00007fcbe168ea6f] write(2, "thread \'", 8thread \') = 8\n[00007fcbe168ea6f] write(2, "main", 4main)  = 4\n[00007fcbe168ea6f] write(2, "\' panicked at \'", 15\' panicked at \') = 15\n[00007fcbe168ea6f] write(2, "called `Result::unwrap()` on an "..., 114called `Result::unwrap()` on an `Err` value: Os { code: 13, kind: PermissionDenied, message: "Permission denied" }) = 114\n[00007fcbe168ea6f] write(2, "\', ", 3\', )   = 3\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp")," directory should have wide permissions for all applications, but to mitigate any permission issues the user can override the system environment ",(0,i.kt)("inlineCode",{parentName:"p"},"TMPDIR"),". For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"installer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," scripts override ",(0,i.kt)("inlineCode",{parentName:"p"},"TMPDIR")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/tmp")," setting it in the service unit ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment="),".")),(0,i.kt)("p",null,"The Lightning CLI process is aware of the environment variable TMPDIR, which the operators can override as discussed in the reference for ",(0,i.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/update-cli-from-source-code/#update-the-systemd-service-unit"},"Update the System service unit"),"."),(0,i.kt)("p",null,"In short, it requires you to include an ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment=")," value of ",(0,i.kt)("inlineCode",{parentName:"p"},"TMPDIR=/var/tmp")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"[Service]\n...\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n")),(0,i.kt)("admonition",{title:"attention",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/lightning.service")," service unit file presented here is a shorter version for simplicity. Do not replace your service unit file with the shorter content version presented here.")),(0,i.kt)(a.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}u.isMDXComponent=!0},3872:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294);const i=e=>{let{image:n,name:t,title:i,url:a,communityMember:o=!1}=e;return r.createElement("section",{className:"author_card"},r.createElement("div",null,r.createElement("span",{className:"avatar"},r.createElement("a",{href:a,target:"_blank",alt:t},r.createElement("img",{src:n,alt:t}))),r.createElement("div",null,r.createElement("span",{className:"name"},r.createElement("a",{href:a,target:"_blank",alt:t},t)),r.createElement("span",{className:"title"},i),r.createElement("span",{className:"discord"},o?"Join our community on":"Got questions? Find us on"," ",r.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);