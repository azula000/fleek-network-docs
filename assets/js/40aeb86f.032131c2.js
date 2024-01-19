"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[4402],{1586:(e,n,t)=>{t.d(n,{ZP:()=>r});var s=t(5893),o=t(1151);function i(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"/home/<USERNAME>/.lightning/config.toml"})," you'll find some and more of the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The configuration properties and values presented above are a shorter version of what you'll find on your ",(0,s.jsx)(n.strong,{children:"configuration.toml"}),". We keep it short to make it easier to follow, do not copy and paste."]})}),"\n",(0,s.jsxs)(n.p,{children:["Find and replace all instances of ~ in the config file ",(0,s.jsx)(n.code,{children:"/home/<USERNAME>/.lightning/config.toml"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of how to do it using ",(0,s.jsx)(n.strong,{children:"sed"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'sed -i "s|~/.lightning|/home/<USERNAME>/.lightning|g" "/home/<USERNAME>/.lightning/config.toml"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Replace the ",(0,s.jsx)(n.code,{children:"<USERNAME>"})," with your username. For example, if you have followed the recommendation to ",(0,s.jsx)(n.a,{href:"/docs/node/install#create-a-user",children:"create a user"})," it would look like ",(0,s.jsx)(n.code,{children:"/home/lgtn/.lightning/config.toml"})," for the username ",(0,s.jsx)(n.strong,{children:"lgtn"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["For example, if your username is ",(0,s.jsx)(n.code,{children:"lgtn"})," that'd look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'sed -i "s|~/.lightning|/home/lgtn/.lightning|g" "/home/lgtn/.lightning/config.toml"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Once modified, you can run a ",(0,s.jsx)(n.code,{children:"cat"})," to see the content of the files to confirm it has been updated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cat /home/lgtn/.lightning/config.toml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For our example where we opted in for the username ",(0,s.jsx)(n.code,{children:"lgtn"})," that would look like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,s.jsx)(n.p,{children:"Bear in mind that we are keeping the content of the file short to make it easier to read and follow. The content of your configuration file should look slightly different, amongst these it should contain other properties and values. You should not copy and replace the content of your files with the ones presented here."})})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},1761:(e,n,t)=>{t.d(n,{ZP:()=>r});var s=t(5893),o=t(1151);function i(e){const n={admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The flag ",(0,s.jsx)(n.code,{children:"-c"})," in the ",(0,s.jsx)(n.code,{children:"lightning.service"})," ",(0,s.jsx)(n.strong,{children:"ExecStart"}),", is to provide the toml configuration file path e.g. defaults to ",(0,s.jsx)(n.code,{children:"~/.lightning/config.toml"}),". This is to avoid the path being determined dynamically (given path base ~ or $HOME), as users might control the systemctl service as a ",(0,s.jsx)(n.strong,{children:"user"})," or ",(0,s.jsx)(n.strong,{children:"sudoer"}),". For example, a ",(0,s.jsx)(n.strong,{children:"sudoer"})," would have the ",(0,s.jsx)(n.strong,{children:"configuration"})," set to ",(0,s.jsx)(n.code,{children:"/root/.lightning/config.toml"})," or ",(0,s.jsx)(n.code,{children:"/home/username/.lightning/config.toml"})," depending on using ",(0,s.jsx)(n.strong,{children:"sudo"})," which might cause some confusion to some users."]})})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},4405:(e,n,t)=>{t.d(n,{ZP:()=>r});var s=t(5893),o=t(1151);function i(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You should be following the ",(0,s.jsx)(n.a,{href:"/docs/node/install#create-a-user-1",children:"create a user"})," recommendation. For our example, we have the username ",(0,s.jsx)(n.code,{children:"lgtn"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you have chosen a different username, replace ",(0,s.jsx)(n.code,{children:"lgtn"})," by the correct username you have selected."]})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"config.toml"})," you'll find some and more of the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Find and replace all instances of ",(0,s.jsx)(n.code,{children:"~"})," in the config file ",(0,s.jsx)(n.code,{children:"/home/lgtn/.lightning/config.toml"}),". Here's an example using ",(0,s.jsx)(n.code,{children:"sed"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'sed -i "s|~/.lightning|/home/lgtn/.lightning|g" "/home/lgtn/.lightning/config.toml"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"config.toml"})," example below is a shorter version of what you'll encounter, yours might look different. We do this to keep the guide simple to read. Do not copy and replace with the version demonstrated here."]})}),"\n",(0,s.jsxs)(n.p,{children:["Once changed, all the instances of ",(0,s.jsx)(n.code,{children:"~/"})," should be replaced by your user path e.g. ",(0,s.jsx)(n.code,{children:"/home/lgtn/"}),". For our example, the output would look like the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[BLANK]\n\n[application]\ndb_path = "/home/lgtn/.lightning/data/app_db"\n\n[consensus]\nstore_path = "/home/lgtn/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "/home/lgtn/.lightning/blockstore"\n\n[resolver]\nstore_path = "/home/lgtn/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "/home/lgtn/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/lgtn/.lightning/keystore/node.pem"\n'})})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},2618:(e,n,t)=>{t.d(n,{ZP:()=>r});var s=t(5893),o=t(1151);function i(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Shutting down a Node after an Epoch can be tedious, given the remaining time an Epoch can take to end. Doing it prematurely, will cause reputation penalties, e.g. shutting down before the participation state change to offline. Therefore, a shutdown utility is available in the ",(0,s.jsx)(n.strong,{children:"Tools"})," menu option of ",(0,s.jsx)(n.code,{children:"get.fleek.network"}),"."]}),(0,s.jsx)(n.p,{children:"To access it, execute the command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl https://get.fleek.network | bash\n"})})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},139:(e,n,t)=>{t.d(n,{ZP:()=>r});var s=t(5893),o=t(1151);function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"To prevent any negative impact on the node's reputation, it's advisable to wait until the end of the Epoch (~24h) before shutting down the node when opting out. The same applies to nodes that have opted-in but are currently offline."}),(0,s.jsxs)(n.p,{children:["To learn more, read the ",(0,s.jsx)(n.a,{href:"/docs/node/lightning-cli",children:"Lightning-CLI"})," section for command ",(0,s.jsx)(n.a,{href:"/docs/node/lightning-cli#opt",children:"opt"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},2382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>g,default:()=>j,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var s=t(5893),o=t(1151),i=t(3872),r=t(4405),l=t(1761),a=t(1586),c=t(139),h=t(2618);const d={title:"Update CLI from source code",slug:"update-cli-from-source-code",hide_title:!0,tags:["references","help","update","upgrade","fix"]},g=void 0,u={id:"Lightning CLI/update-cli-from-source-code",title:"Update CLI from source code",description:"Although the step-by-step instructions described here are simple to follow, this process is available as an automated script. To use it execute the following command in your server terminal and follow the instructions:",source:"@site/references/Lightning CLI/update-cli-from-source-code.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/update-cli-from-source-code",permalink:"/references/Lightning CLI/update-cli-from-source-code",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/update-cli-from-source-code.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"update",permalink:"/references/tags/update"},{label:"upgrade",permalink:"/references/tags/upgrade"},{label:"fix",permalink:"/references/tags/fix"}],version:"current",lastUpdatedAt:1705685659,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{title:"Update CLI from source code",slug:"update-cli-from-source-code",hide_title:!0,tags:["references","help","update","upgrade","fix"]},sidebar:"defaultSidebar",previous:{title:"Uninstall Lightning Node",permalink:"/references/Lightning CLI/uninstall-lightning-node"},next:{title:"Service keeps running after shutdown",permalink:"/references/Systemd/service-keeps-running-after-shutdown"}},p={},m=[{value:"Switch to the installation user",id:"switch-to-the-installation-user",level:2},{value:"Change directory to the source code",id:"change-directory-to-the-source-code",level:2},{value:"Checkout to branch",id:"checkout-to-branch",level:2},{value:"Pull the latest changes",id:"pull-the-latest-changes",level:2},{value:"Build binary from the source",id:"build-binary-from-the-source",level:2},{value:"Update the symlink",id:"update-the-symlink",level:2},{value:"Set user path in config.toml",id:"set-user-path-in-configtoml",level:2},{value:"Update the systemd service unit",id:"update-the-systemd-service-unit",level:2},{value:"Clear the data",id:"clear-the-data",level:2},{value:"Update the <code>config.toml</code>",id:"update-the-configtoml",level:2},{value:"Update the <code>config.toml</code> with user home path",id:"update-the-configtoml-with-user-home-path",level:2},{value:"Restart the service",id:"restart-the-service",level:2},{value:"Health checkup",id:"health-checkup",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Although the step-by-step instructions described here are simple to follow, this process is available as an automated script. To use it execute the following command in your server terminal and follow the instructions:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -sS https://get.fleek.network/update | bash\n"})})]}),"\n",(0,s.jsx)(c.ZP,{}),"\n",(0,s.jsx)(h.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"switch-to-the-installation-user",children:"Switch to the installation user"}),"\n",(0,s.jsx)(n.p,{children:"Switch to the username you've used throughout the installation process."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"su <USERNAME>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you used the username ",(0,s.jsx)(n.code,{children:"lgtn"})," it'll look like the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"su lgtn\n"})}),"\n",(0,s.jsx)(n.h2,{id:"change-directory-to-the-source-code",children:"Change directory to the source code"}),"\n",(0,s.jsxs)(n.p,{children:["If you have installed it via the recommended process or instructions, then the default location where the ",(0,s.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"source code"})," is stored is ",(0,s.jsx)(n.code,{children:"~/fleek-network/lightning"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd ~/fleek-network/lightning\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Notice that we use ",(0,s.jsx)(n.code,{children:"~"}),", which refers to ",(0,s.jsx)(n.code,{children:"$HOME"}),". You must use the username used for the installation process. For example, on ",(0,s.jsx)(n.a,{href:"/docs/node/requirements#server",children:"Ubuntu"})," if you use the username ",(0,s.jsx)(n.code,{children:"lgtn"}),", the pathname for ",(0,s.jsx)(n.code,{children:"$HOME"})," is ",(0,s.jsx)(n.code,{children:"/home/lgtn"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"checkout-to-branch",children:"Checkout to branch"}),"\n",(0,s.jsxs)(n.p,{children:["Make sure that you are checked in to the correct branch. For the current testnet phase that'd be ",(0,s.jsx)(n.code,{children:"testnet-alpha-1"}),". If you use any other branch name, your node will not function correctly. Use the branch name ",(0,s.jsx)(n.code,{children:"testnet-alpha-1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git checkout testnet-alpha-1\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We try to update our documentation promptly but sometimes are a bit behind on any changes we might make in real-time. If you find any typos, such as the wrong branch name, help us by letting us know! Find us in Fleek Network section of our ",(0,s.jsx)(n.a,{href:"https://discord.gg/fleek",children:"Discord"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"pull-the-latest-changes",children:"Pull the latest changes"}),"\n",(0,s.jsxs)(n.p,{children:["Before make sure that you stash or clear any changes you may have in the working directory, as otherwise, ",(0,s.jsx)(n.code,{children:"git"})," will let you know about local changes\u2013if you'd like to learn more about it read the ",(0,s.jsx)(n.a,{href:"https://git-scm.com/docs/git-stash",children:"git stash document"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A quick way to clean is to ",(0,s.jsx)(n.code,{children:"stash"})," the changes, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git stash \n"})}),"\n",(0,s.jsxs)(n.p,{children:["To pull the latest changes use the ",(0,s.jsx)(n.code,{children:"git pull"})," command, as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git pull origin testnet-alpha-1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, to have to stash and pull, you can reset the repository to the origin."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git fetch origin testnet-alpha-1\ngit reset --hard origin/testnet-alpha-1\ngit clean -f\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We are using the branch named ",(0,s.jsx)(n.code,{children:"testnet-alpha-1"}),", which is specific to the early testnet launch. Change to the correct branch name according to needs. For example, in the future the mainnet version will go on branch name ",(0,s.jsx)(n.code,{children:"main"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"build-binary-from-the-source",children:"Build binary from the source"}),"\n",(0,s.jsx)(n.p,{children:"To build the binary from the source code, we execute the cargo build command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cargo +stable install --locked --path core/cli --features services\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"The command uses the stable rust toolchain, if the command fails you have to install it, run the following commands:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"rustup toolchain install stable\n"})}),(0,s.jsx)(n.p,{children:"Optionally, set stable as default toolchain as follows:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:" rustup default stable\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"update-the-symlink",children:"Update the symlink"}),"\n",(0,s.jsx)(n.p,{children:"Start by removing the existing one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'sudo rm -f "/usr/local/bin/lgtn"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Create a new symlink that links the new build binary to ",(0,s.jsx)(n.code,{children:"/usr/local/bin/lgtn"}),", as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo ln -s ~/fleek-network/lightning/target/release/lightning-node /usr/local/bin/lgtn\n"})}),"\n",(0,s.jsx)(n.h2,{id:"set-user-path-in-configtoml",children:"Set user path in config.toml"}),"\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"update-the-systemd-service-unit",children:"Update the systemd service unit"}),"\n",(0,s.jsxs)(n.p,{children:["Open and edit the ",(0,s.jsx)(n.code,{children:"/etc/systemd/system/lightning.service"})," file."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<YOUR-USERNAME>"})," with the username. For example, in the ",(0,s.jsx)(n.a,{href:"/docs/node/install#create-a-user",children:"documentation"})," we use the username ",(0,s.jsx)(n.code,{children:"lgtn"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure that the ",(0,s.jsx)(n.code,{children:"ExecStart"})," is set correctly"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/<YOUR-USERNAME>/.lightning/config.toml -vv run\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(l.ZP,{}),"\n",(0,s.jsx)(n.p,{children:"When complete make sure the file is saved. Followed by a systemctl daemon reload:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(n.h2,{id:"clear-the-data",children:"Clear the data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"rm -rf ~/.lightning/data\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Depending on how you control the system, this might need ",(0,s.jsx)(n.strong,{children:"sudo"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo rm -rf ~/.lightning/data\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"update-the-configtoml",children:["Update the ",(0,s.jsx)(n.code,{children:"config.toml"})]}),"\n",(0,s.jsxs)(n.p,{children:["Remove the ",(0,s.jsx)(n.code,{children:"~/.lightning/config.toml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"rm ~/.lightning/config.toml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a new ",(0,s.jsx)(n.code,{children:"config.toml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"lgtn print-config --default > ~/.lightning/config.toml\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"update-the-configtoml-with-user-home-path",children:["Update the ",(0,s.jsx)(n.code,{children:"config.toml"})," with user home path"]}),"\n",(0,s.jsx)(a.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"restart-the-service",children:"Restart the service"}),"\n",(0,s.jsxs)(n.p,{children:["Once the cargo build process is completed, you have to restart the service. We're assuming you are using non-root user as ",(0,s.jsx)(n.a,{href:"/docs/node/install#create-a-user",children:"recommended"}),", you won't use ",(0,s.jsx)(n.strong,{children:"sudo"})," to start the service. The command will look as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"sudo systemctl restart lightning\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you have installed the Fleek Network lightning manually, the ",(0,s.jsx)(n.a,{href:"/docs/node/install#systemd-service-setup",children:"installation instructions"})," recommended setting up a systemd service for the Fleek Network process. If you haven't, you're advised to check the instructions provided."]})}),"\n",(0,s.jsx)(n.h2,{id:"health-checkup",children:"Health checkup"}),"\n",(0,s.jsx)(n.p,{children:"Do a quick health check by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'curl -w "\\p" localhost:4230/health\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If successful, you should get the response ",(0,s.jsx)(n.code,{children:"running and staked"}),", as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"running and staked\n"})}),"\n",(0,s.jsx)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function j(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},3872:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var s=t(5893);const o=e=>{let{image:n,name:t,title:o,url:i,communityMember:r=!1}=e;return(0,s.jsx)("section",{className:"author_card",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"avatar",children:(0,s.jsx)("a",{href:i,target:"_blank",alt:t,children:(0,s.jsx)("img",{src:n,alt:t})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"name",children:(0,s.jsx)("a",{href:i,target:"_blank",alt:t,children:t})}),(0,s.jsx)("span",{className:"title",children:o}),(0,s.jsxs)("span",{className:"discord",children:[r?"Join our community on":"Got questions? Find us on"," ",(0,s.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);