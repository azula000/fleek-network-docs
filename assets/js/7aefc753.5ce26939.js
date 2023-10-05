"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),l=(n(7294),n(3905)),a=n(3872);const i={title:"Uninstall Lightning Node",slug:"uninstall-lightning-node",hide_title:!0,tags:["References","Help","Uninstall","Remove","Delete","Clear","Clean"]},o=void 0,s={unversionedId:"Lightning CLI/uninstall-lightning-node",id:"Lightning CLI/uninstall-lightning-node",title:"Uninstall Lightning Node",description:"Remove symLink",source:"@site/references/Lightning CLI/uninstall-lightning-node.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/uninstall-lightning-node",permalink:"/references/Lightning CLI/uninstall-lightning-node",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/uninstall-lightning-node.md",tags:[{label:"References",permalink:"/references/tags/references"},{label:"Help",permalink:"/references/tags/help"},{label:"Uninstall",permalink:"/references/tags/uninstall"},{label:"Remove",permalink:"/references/tags/remove"},{label:"Delete",permalink:"/references/tags/delete"},{label:"Clear",permalink:"/references/tags/clear"},{label:"Clean",permalink:"/references/tags/clean"}],version:"current",lastUpdatedAt:1696530063,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{title:"Uninstall Lightning Node",slug:"uninstall-lightning-node",hide_title:!0,tags:["References","Help","Uninstall","Remove","Delete","Clear","Clean"]},sidebar:"defaultSidebar",previous:{title:"Permission denied (os error 13)",permalink:"/references/Lightning CLI/permission-denied-os-error-13"},next:{title:"Update CLI from source code",permalink:"/references/Lightning CLI/update-cli-from-source-code"}},c={},p=[{value:"Remove symLink",id:"remove-symlink",level:2},{value:"Delete the local source code",id:"delete-the-local-source-code",level:2},{value:"Disable the systemd service",id:"disable-the-systemd-service",level:2},{value:"Clear the lightning config directory",id:"clear-the-lightning-config-directory",level:2},{value:"Uninstall Cargo and Rust",id:"uninstall-cargo-and-rust",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"remove-symlink"},"Remove symLink"),(0,l.kt)("p",null,"To remove a symbolic link, use either the rm or unlink command followed by the name of the symlink as an argument. Here's an example with ",(0,l.kt)("inlineCode",{parentName:"p"},"unlink"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"unlink /usr/local/bin/lgtn\n")),(0,l.kt)("h2",{id:"delete-the-local-source-code"},"Delete the local source code"),(0,l.kt)("p",null,"Delete the local source code which was copied from the remote ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"repository"),". You can delete it recursively by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rm -r ~/fleek-network/lightning\n")),(0,l.kt)("p",null,"\ud83d\udca1 Use the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," to force remove by skipping any prompts, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"rm -rf <PATHNAME>")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The default install location is ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/fleek-network/lightning"),". If you have selected a different location to store the repository, change the target path.")),(0,l.kt)("h2",{id:"disable-the-systemd-service"},"Disable the systemd service"),(0,l.kt)("p",null,"To disable the Fleek Network Lightning Systemd's service, start by stopping the service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop lightning.service\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can replace ",(0,l.kt)("inlineCode",{parentName:"p"},"lightning.service")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"lightning"),".")),(0,l.kt)("p",null,"Disable the lightning service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl disable lightning.service\n")),(0,l.kt)("p",null,"If you have used the recommended procedures in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/node/install"},"install")," documentation you'll have to remove the Systemd unit (file that defines the service)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rm /etc/systemd/system/lightning.service\n")),(0,l.kt)("p",null,"Reload the Systemd service daemon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,l.kt)("h2",{id:"clear-the-lightning-config-directory"},"Clear the lightning config directory"),(0,l.kt)("p",null,"The Fleek Network lightning config directory is where the configuration, keystore\u2013the location where your private key is hosted\u2013and other system files are stored."),(0,l.kt)("admonition",{title:"WARNING",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Make sure to backup any sensitive data, such as the keystore (private keys), as you won't be able to recover the keys by any other means. If you have any funds associated with it, it'll be lost forever. The Fleek Network team or anyone else will not be able to help recover keys. Your keys, your responsibility.")),(0,l.kt)("p",null,"Alternatively, instead of deleting you can move the files to a custom directory name such as",(0,l.kt)("inlineCode",{parentName:"p"},".lightning.backupDATESTAMP"),", e.g. the example below we've used the date ",(0,l.kt)("inlineCode",{parentName:"p"},"2023-09-06-1205")," as that was the time this text was written:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.lightning ~/.lightning.backup202309061205\n")),(0,l.kt)("p",null,"To clear the lightning config directory remove any files recursively by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rm -r ~/.lightning/*\n")),(0,l.kt)("p",null,"\ud83d\udca1 Use the flag ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," to force remove by skipping any prompts, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"rm -rf <PATHNAME>/*")),(0,l.kt)("p",null,"Alternatively, delete the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.lightning")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rm -r ~/.lightning\n")),(0,l.kt)("h2",{id:"uninstall-cargo-and-rust"},"Uninstall Cargo and Rust"),(0,l.kt)("p",null,"To uninstall rustc, rustup and cargo run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rustup self uninstall\n")),(0,l.kt)(a.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}u.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);const l=e=>{let{image:t,name:n,title:l,url:a,communityMember:i=!1}=e;return r.createElement("section",{className:"author_card"},r.createElement("div",null,r.createElement("span",{className:"avatar"},r.createElement("a",{href:a,target:"_blank",alt:n},r.createElement("img",{src:t,alt:n}))),r.createElement("div",null,r.createElement("span",{className:"name"},r.createElement("a",{href:a,target:"_blank",alt:n},n)),r.createElement("span",{className:"title"},l),r.createElement("span",{className:"discord"},i?"Join our community on":"Got questions? Find us on"," ",r.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);