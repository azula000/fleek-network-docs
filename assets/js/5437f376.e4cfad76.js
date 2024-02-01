"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[909],{3616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>h,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151),r=t(3872),o=t(5979);const a={title:"Managing the keystore",hide_title:!0,slug:"managing-the-keystore",date:new Date("2023-11-14T12:00:00.000Z"),image:"./assets/managing-the-keystore.png?202311181211",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to",category:"Tutorial",tags:["guide","keystore","public keys","private keys","keys"]},h=void 0,l={id:"Node Operators/managing-the-keystore",title:"Managing the keystore",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to",source:"@site/guides/Node Operators/managing-the-keystore.md",sourceDirName:"Node Operators",slug:"/Node Operators/managing-the-keystore",permalink:"/guides/Node Operators/managing-the-keystore",draft:!1,unlisted:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/managing-the-keystore.md",tags:[{label:"guide",permalink:"/guides/tags/guide"},{label:"keystore",permalink:"/guides/tags/keystore"},{label:"public keys",permalink:"/guides/tags/public-keys"},{label:"private keys",permalink:"/guides/tags/private-keys"},{label:"keys",permalink:"/guides/tags/keys"}],version:"current",lastUpdatedAt:1706789270,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{title:"Managing the keystore",hide_title:!0,slug:"managing-the-keystore",date:"2023-11-14T12:00:00.000Z",image:"./assets/managing-the-keystore.png?202311181211",description:"The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any supported system you\u2019re migrating to",category:"Tutorial",tags:["guide","keystore","public keys","private keys","keys"]},sidebar:"defaultSidebar",previous:{title:"How to manage log files",permalink:"/guides/Node Operators/how-to-manage-log-files"},next:{title:"Running a node in Docker",permalink:"/guides/Node Operators/running-a-node-in-docker"}},d={image:t(4110).Z},c=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Locating the file",id:"locating-the-file",level:3},{value:"Configuration sections",id:"configuration-sections",level:3},{value:"Type of keys",id:"type-of-keys",level:3},{value:"Key privacy",id:"key-privacy",level:3},{value:"Identity selection",id:"identity-selection",level:3},{value:"Backing up the keystore",id:"backing-up-the-keystore",level:2},{value:"Lower security",id:"lower-security",level:3},{value:"Higher security",id:"higher-security",level:3},{value:"Storage",id:"storage",level:3},{value:"Loading keys on runtime",id:"loading-keys-on-runtime",level:2},{value:"Restoring the keystore",id:"restoring-the-keystore",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Managing the keystore",src:t(4350).Z+"",width:"1450",height:"816"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Fleek Network incentivizes participation by rewarding its node providers. A node is identifiable by an identity, which the reward mechanism uses to identify the node to reward it."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["At time of writing the rewards mechanism hasn't yet been introduced, read the ",(0,i.jsx)(n.a,{href:"https://blog.fleek.network/post/fleek-network-testnet-plans",children:"testnet plans"})," to get a high level perspective over the plans. A token and economics paper should be released in the future."]})}),"\n",(0,i.jsxs)(n.p,{children:["We'll use the term identity to describe the key store declared in the configuration, in our case ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail",children:"PEM"})," files. The content of the PEM files and the file itself should be kept secret."]}),"\n",(0,i.jsxs)(n.p,{children:["The key store is in the file system and the location is defined in the Fleek Network ",(0,i.jsx)(n.code,{children:"~/.lightning/config.toml"}),", as a private key stored in an identity named PEM file (by default ",(0,i.jsx)(n.code,{children:"consensus.pem"})," and ",(0,i.jsx)(n.code,{children:"node.pem"}),"). It's essential to understand this, as you may want to copy the identity to a new server setup, to persist the identity accross to the new server setup."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Security is achieved by issuing users private cryptographic keys. Only the holder of the private key has access to sensitive information, such as an identity, which relates to reputation, rewards, etc. The security of the private key is the responsibility of the user. Unfortunately, Fleek Network is unable to help you regain access to your private key if you've lost or failed to secure it. The private keys are your responsibility."})}),"\n",(0,i.jsxs)(n.p,{children:["The following will guide you through some of the fundamentals to help understand how to manage the key store at the very basics, and help you persist the key store identity, in any ",(0,i.jsx)(n.a,{href:"/docs/node/requirements#server",children:"supported system"})," you're migrating to."]}),"\n",(0,i.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsx)(n.p,{children:"To follow the guide, you will need the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Familiarity with the command-line interface"}),"\n",(0,i.jsxs)(n.li,{children:["A basic understanding of ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Public-key_cryptography",children:"how public key cryptography works"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-file",children:"Configuration file"}),"\n",(0,i.jsx)(n.h3,{id:"locating-the-file",children:"Locating the file"}),"\n",(0,i.jsxs)(n.p,{children:["The Lightning CLI has a configuration file in the home directory of the user, which by default is located in the path ",(0,i.jsx)(n.code,{children:"$HOME/.lightning"})," or ",(0,i.jsx)(n.code,{children:"~/.lightning"})," under the name ",(0,i.jsx)(n.code,{children:"config.toml"}),". It's generally described as ",(0,i.jsx)(n.code,{children:"~/.lightning/config.toml"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The tilde in ",(0,i.jsx)(n.code,{children:"~/.lightning"})," represents ",(0,i.jsx)(n.code,{children:"$HOME"})," which is simpler, but we'll use ",(0,i.jsx)(n.code,{children:"$HOME"})," to make it easy to follow."]})}),"\n",(0,i.jsxs)(n.p,{children:["If you're following the install recommendations you should be logged in with a ",(0,i.jsx)(n.strong,{children:"sudoer"})," account. For our guide, let's imagine that the ",(0,i.jsx)(n.strong,{children:"sudoer"})," username we are logged in with is ",(0,i.jsx)(n.strong,{children:"lgtn"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The word ",(0,i.jsx)(n.strong,{children:"sudo"}),' is the abbreviation of the term "super user do". As the name suggests, it is the privilege that a super user, such as an administrator has to do whatever it wants in the system. A super user can be an administrator, like the ',(0,i.jsx)(n.strong,{children:"root"})," or what we described here as a user in the group ",(0,i.jsx)(n.strong,{children:"sudo"})," aka ",(0,i.jsx)(n.strong,{children:"sudoer"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"If you are logged in with a username, that'd be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"/home/<USERNAME>/.lightning/config.toml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For our example for user ",(0,i.jsx)(n.code,{children:"lgtn"})," that is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"/home/lgtn/.lightning/config.toml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you log in with another user, let's say ",(0,i.jsx)(n.code,{children:"fleek"})," it'd be:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"/home/fleek/.lightning/config.toml\n"})}),"\n",(0,i.jsx)(n.p,{children:"At any time, you can check which user you are logged in with by running the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"whoami\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example of our user ",(0,i.jsx)(n.code,{children:"lgtn"}),", which for the command above outputs:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To switch to a particular user, you can run the command ",(0,i.jsx)(n.code,{children:"su <USERNAME>"})," e.g. for the user ",(0,i.jsx)(n.strong,{children:"lgtn"})," we would execute the command ",(0,i.jsx)(n.code,{children:"su lgtn"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Now that you know where to locate the configuration file for any given user you are logged in with, learn about the ",(0,i.jsx)(n.a,{href:"#configuration-sections",children:"Configuration sections"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"configuration-sections",children:"Configuration sections"}),"\n",(0,i.jsxs)(n.p,{children:["The Fleek Network node configuration settings are located in the path ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/config.toml"}),", and it's organized by configuration sections."]}),"\n",(0,i.jsx)(n.p,{children:"At the time of writing, we have a TOML file with sections. Here are some examples amongst others:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"application"}),"\n",(0,i.jsx)(n.li,{children:"origin-ipfs"}),"\n",(0,i.jsx)(n.li,{children:"rpc"}),"\n",(0,i.jsx)(n.li,{children:"signer"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Each of the sections holds several property names and values. If you are accustomed to the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JSON",children:"JSON"})," or ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/YAML",children:"YAML"})," formats, you'll find the TOML format a bit similar (if you'd like to learn more about the TOML file format, read about it ",(0,i.jsx)(n.a,{href:"https://toml.io/en/",children:"here"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"By default, and at time of writing the Lightning CLI configuration file (config.toml) is similar to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'[BLANK]\n\n[application]\ndb_path = "/home/lgtn/.lightning/data/app_db"\nmode = "Prod"\nstorage = "RocksDb"\ntestnet = true\n\n[blockserver]\naddress = "0.0.0.0:4211"\n\n[broadcast]\naddress = "0.0.0.0:4200"\n\n[consensus]\nstore_path = "/home/lgtn/.lightning/data/narwhal_store"\n\n[dht]\naddress = "0.0.0.0:8101"\nbootstrappers = []\n\n[fetcher]\n\n[fsstore]\nroot = "/home/lgtn/.lightning/blockstore"\n\n[[handshake.transport]]\nsignal_address = "0.0.0.0:4210"\ntype = "WebRTC"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[handshake.worker]]\ntype = "AsyncWorker"\n\n[[origin-ipfs.gateways]]\nauthority = "ipfs.io"\nprotocol = "Https"\n\n[[origin-ipfs.gateways]]\nauthority = "fleek.ipfs.io"\nprotocol = "Https"\n\n[[origin-ipfs.gateways]]\nauthority = "ipfs.runfission.com"\nprotocol = "Https"\n\n[rep-collector]\nreporter_buffer_size = 5\n\n[resolver]\nstore_path = "/home/lgtn/.lightning/data/resolver_store"\n\n[rpc]\naddr = "0.0.0.0"\nport = 4230\n\n[service-executor]\nservices = [0, 1]\n\n[signer]\nconsensus_key_path = "/home/lgtn/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/lgtn/.lightning/keystore/node.pem"\n\n[topology]\ntesting_min_nodes = 9\ntesting_target_k = 8\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Beware that the configuration file might look a bit different depending on the version you're running and the current development features in place by the Fleek Network core team. You shouldn't copy the example above and replace with yours, as this only servers for illustrative purposes."})}),"\n",(0,i.jsx)(n.p,{children:"Some advanced use cases might require dealing with the host and port number binding, depending on the service provider's needs and customization. We'll keep things simple and assume the default settings."}),"\n",(0,i.jsxs)(n.p,{children:["In this guide, we are interested in the ",(0,i.jsx)(n.code,{children:"[signer]"})," section settings for the ",(0,i.jsx)(n.code,{children:"consensus_key_path"})," and ",(0,i.jsx)(n.code,{children:"node_key_path"})," which by default is set to ",(0,i.jsx)(n.code,{children:"~/.lightning/keystore"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The identity is a text description for the Keystore and at the time of writing we have not yet implemented multiple identity management via the CLI. Thereupon, the identity value serves to find the filename match in the ",(0,i.jsx)(n.code,{children:"keystore_path"}),". This might change as we progress with development. Check the ",(0,i.jsx)(n.a,{href:"#identity-selection",children:"Identity selection"})," to learn more about it!"]})}),"\n",(0,i.jsx)(n.h3,{id:"type-of-keys",children:"Type of keys"}),"\n",(0,i.jsxs)(n.p,{children:["There are three types of keys related to the identity of a node and the account ownership. The keys are based in public-key cryptography, or asymmetric cryptography where each key pair consists of a public key and a corresponding private key. The keys are described in the section ",(0,i.jsx)(n.a,{href:"/docs/learn/the-network/#identity-on-the-fleek-network",children:"identity on the Fleek Network"})," as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A Node key (ConsensusPublicKey) is ",(0,i.jsx)(n.a,{href:"https://electriccoin.co/blog/new-snark-curve/",children:"BLS12-381"})," which facilitates the consensus algorithm or persistence of state, resilience and fault tolerance. Has multi-signature support, the ability to aggregate many signatures into one used for consensus committee when signing certificates"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A Node Networking key (NodePublicKey) is ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/EdDSA",children:"Ed25519"})," used for the speed and performance of the network communications"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Account Owner keys are based on ",(0,i.jsx)(n.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256k1"}),", which corresponds to an Ethereum Address"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For instance, a public key is open to anybody to see, and it represents a unique node identifier in the Fleek Network, a bit like a passport number. On the other hand, the private key is secret, and the operator is responsible to store it privately."}),"\n",(0,i.jsx)(n.p,{children:"The Fleek Network relies on cryptography, thus the Fleek Network team and anybody can access, compromise or manipulate the secrets of an identity. On the other hand, the public key can be used by anyone, Fleek Network included, to identify a node or send rewards to the address without jeopardizing identity security."}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about the identities on the Fleek Network ",(0,i.jsx)(n.a,{href:"/docs/learn/the-network/#identity-on-the-fleek-network",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"key-privacy",children:"Key privacy"}),"\n",(0,i.jsx)(n.p,{children:"If you don\u2019t keep your private keys secret, you'll have your node compromised."}),"\n",(0,i.jsx)(n.p,{children:"Here are a few examples of what you should not do:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Share the ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore"})," directory file content publicly"]}),"\n",(0,i.jsxs)(n.li,{children:["Track the ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore"})," directory files in a version control repository e.g. git"]}),"\n",(0,i.jsxs)(n.li,{children:['Have poor "rights" permissions in UNIX systems e.g. everyone can read, delete, modify ',(0,i.jsx)(n.code,{children:"$HOME/.lightning"})]}),"\n",(0,i.jsx)(n.li,{children:"Allow anyone to access the node provider physically without any access control to the operating and file systems e.g. a VPS provider"}),"\n",(0,i.jsxs)(n.li,{children:["Get rid of a hard drive unformatted or blind erased by selling to somebody or dumping in the bin, which contains ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are many other ways of getting compromised, but hopefully, the ones put above give you a good starter into the subject."}),"\n",(0,i.jsx)(n.p,{children:"Remember, the node provider is the only one responsible when managing the key store. Neither Fleek Network nor the most sophisticated AI system presently can compromise the cryptography in use to help you out. You are fully responsible for securing and retaining your private keys."}),"\n",(0,i.jsx)(n.h3,{id:"identity-selection",children:"Identity selection"}),"\n",(0,i.jsx)(n.p,{children:"Multiple identity management is yet to be implemented but in any case, some users might find it trivial to keep multiple identities and switch between them referencing them by name. The following section is not advocating this approach but sharing some approaches that can help certain use-cases."}),"\n",(0,i.jsxs)(n.p,{children:["Let's suppose that we've recently moved to a new server setup and copied our previous server keystore keys as ",(0,i.jsx)(n.code,{children:"consensus.pem"})," and ",(0,i.jsx)(n.code,{children:"node.pem"})," and renamed the ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore/*.pem"})," to ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore/new-*.pem"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We are using a wildcard ",(0,i.jsx)(n.code,{children:"*"})," to reduce verbosity. The wildcard means as replacement for all the filenames encountered in the path and extension without having to name them individually as we know they are ",(0,i.jsx)(n.code,{children:"consensus.pem"})," and ",(0,i.jsx)(n.code,{children:"node.pem"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["To illustrate this scenario, here's an example of how our ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore"})," directory could look like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:".\n\u251c\u2500\u2500 new-consensus.pem\n\u251c\u2500\u2500 new-node.pem\n\u2514\u2500\u2500 old-consensus.pem\n\u2514\u2500\u2500 old-node.pem\n\n0 directories, 4 file\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"old-*.pem"})," files are the original key store and ",(0,i.jsx)(n.code,{children:"new-*.pem"})," could correspond to the new identity created while setting up the node in the new server."]}),"\n",(0,i.jsxs)(n.p,{children:["Since we have ",(0,i.jsx)(n.code,{children:"[signer]"})," set to the default values, in particular:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[signer]\nconsensus_key_path = "/home/lgtn/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/lgtn/.lightning/keystore/node.pem"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We'd be required to change and switch to the preferred keys. The identity is switch to the provided values once the node is restarted. Thus, we can switch to any identity by changing the ",(0,i.jsx)(n.code,{children:"[signer]"})," ",(0,i.jsx)(n.code,{children:"consensus_key_path"})," and ",(0,i.jsx)(n.code,{children:"node_key_path"})," pathname values anytime as long we restart the server successfully."]}),"\n",(0,i.jsx)(n.p,{children:"To verify which keys are loaded by the Lightning CLI run the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn keys show\n"})}),"\n",(0,i.jsx)(n.p,{children:"You'd find the public keys in the output, which can be used for comparision and should be different everytime the configuration changes and reloaded. Here's an example of the output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Node Public Key: RwPpr35H5AAfWwSDFxwYuJv5TA8PWUd2pdBg+UKsORc=\nConsensus Public Key: s36g09qQzaaOJxi0UZDRCXj3HUUWjaGiYrQV6Ylo9Ih6jMvrnxM5s1OpBnsEj5R1AVYcuxlnVR+oyEjgJ3WpI5LOHSN1Q6Zur33vka3IachBEIKIbsiXMJW16vu4n4bG\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The PEM files can be named as you wish, but by default we like to keep it sound to avoid confusion and make it as clear as possible."})}),"\n",(0,i.jsx)(n.h2,{id:"backing-up-the-keystore",children:"Backing up the keystore"}),"\n",(0,i.jsx)(n.p,{children:"When dealing with Fleek Network it's crucial to always be aware of the identity. You should backup private keys in case the unexpected happens, as it's impossible to recover the identity in any other way, including the core team, any other person or system."}),"\n",(0,i.jsxs)(n.p,{children:["Backing up your keystore pem files are crucial to ensure the safety and accessibility of your identity on the Fleek Network. For example, if your ",(0,i.jsx)(n.code,{children:"$HOME/.lightning"})," is deleted you'll still be able to restore it if you have backed it up properly."]}),"\n",(0,i.jsx)(n.p,{children:"There are many ways to make identity backups, each with its own benefits and drawbacks. At risk of oversimplifying, we'll focus on a simple manual approach to expose some principles you should have awareness."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"The security is never stronger than its weakest link, and it is very likely that the weakest link is not the method itself. It's pointless to encrypt the backup archive with sophisticated methods when the passphrase is weak or of an easy guess."})}),"\n",(0,i.jsx)(n.p,{children:"None of the methods described here are being endorsed by the Fleek Network team use the knowledge provided here for educational purposes only and at your own risk."}),"\n",(0,i.jsx)(n.h3,{id:"lower-security",children:"Lower security"}),"\n",(0,i.jsx)(n.p,{children:"If you opt for the lowest level of security, you can use zip and unzip. The man page of zip described the encryption algorithm used to be weaker than PGP."}),"\n",(0,i.jsxs)(n.p,{children:["To zip and encrypto the ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore"})," directory run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# It'll prompt for password (remember)\nzip --encrypt -r keystore.zip.enc $HOME/.lightning/keystore\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To unzip and decrypt the ",(0,i.jsx)(n.code,{children:"keystore.zip.enc"}),", you'd run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# It'll prompt for password (recall)\nunzip keystore.zip.enc -d $HOME/.lightning/keystore\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We provide the unzip destiny target to the flag ",(0,i.jsx)(n.code,{children:"-d"}),". The unzip process outputs the files onto the desired location ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/keystore"}),", thus overriding any contents. If you have any files in the destiny target directory it'll be overriden, effectively replacing with the output of the unzipped directory content, so make sure you backup any files as required."]})}),"\n",(0,i.jsx)(n.h3,{id:"higher-security",children:"Higher security"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"Tar"})," archive, which will contain the target directory, files and the Tar stores all of the relative paths in the tarball itself."]}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"tarbar"})," by executing:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'tar -cf "keystore.tar" $HOME/.lightning/keystore\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"keystore.tar"})," should be in the current work directory."]}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"gpg"})," with the ",(0,i.jsx)(n.a,{href:"https://www.gnupg.org/gph/en/manual/x110.html",children:"symmetric option"}),", it creates the keys for that file and request a password to protect them. If you are familiar with asymmetric ",(0,i.jsx)(n.code,{children:"gpg"}),", it's similar, but it's not signed with your public key or such."]}),"\n",(0,i.jsx)(n.p,{children:"The encryption command is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo gpg -a --symmetric --cipher-algo AES256 keystore.tar\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"keystore.tar.asc"})," should be in the current work directory."]}),"\n",(0,i.jsxs)(n.p,{children:["To decrypt the ",(0,i.jsx)(n.code,{children:"keystore.tar.asc"})," file, enter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo gpg -a --output keystore.tar --decrypt keystore.tar.asc\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To extract the ",(0,i.jsx)(n.code,{children:"keystore.tar"})," is simple, but be aware that it unarchives with the original directory structure, which might be a bit confusing. So, we'll create a new temporary directory for our example that will use to extract to."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"mkdir $HOME/tar_keystore_extract\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, run the command to extract to the target directory, as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"tar -xf keystore.tar -C $HOME/tar_keystore_extract\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"/home/<username>/.lightning/keystore"})," should be in the ",(0,i.jsx)(n.code,{children:"tar_keystore_extract"})," directory where you'll find the PEM files."]}),"\n",(0,i.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(n.p,{children:"The backup archive should only be accessible by yourself. If you decided to store it in a cloud storage provider, be aware of increased security risks. Cloud storage is convenient, but it ultimately puts data into the hands of others. If you're not particularly concerned, or have confidence about the encryption of the files, then that's at your own risk. But it's recommended to store in a physical hard drive that remains disconnected from computers and network devices."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"If you use cloud storage to store your sensitive data, encryption should be your first line of defense. Encrypting files before uploading them to the cloud is crucial to reduce others from accessing information without your permissions and knowledge."})}),"\n",(0,i.jsx)(n.p,{children:"Remember that the security of the private key is the responsibility of the user. Unfortunately, the Fleek Network team and any others are unable to help regain access to private key if lost or failed to secure them. The private keys are the user responsibility. The Fleek Network team doesn't endorse any methods of encryption and storage, the methods described here are for educational purposes only."}),"\n",(0,i.jsx)(n.h2,{id:"loading-keys-on-runtime",children:"Loading keys on runtime"}),"\n",(0,i.jsxs)(n.p,{children:["As described in the section ",(0,i.jsx)(n.a,{href:"#configuration-file",children:"configuration files"})," the default location of the ",(0,i.jsx)(n.code,{children:".lightning"})," system configuration directory is ",(0,i.jsx)(n.code,{children:"$HOME/.lightning"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/config.toml"})," holds the information of where the Lightning CLI node process should pull the keystore pem files. The location of the pem files can be placed anywhere the node process has permissions to read."]}),"\n",(0,i.jsxs)(n.p,{children:["When unarchiving the backup files, the keystore directory or pem files should be placed in the directory declared in the ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/config.toml"}),". That is if the location is the one specified on the runtime\u2013the command declared to launch and run the lightning service, that has the optional ",(0,i.jsx)(n.code,{children:"-c"})," configuration flag that takes any custom location which overrides the default ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/config.toml"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["On runtime, the Lightning service can have specified a configuration file in any readable location. If a configuration pathname isn't passed, it'll default to the ",(0,i.jsx)(n.code,{children:"$HOME/.lightning/config.toml"}),". It's important to understand this to avoid confusion."]}),(0,i.jsx)(n.p,{children:"The service that starts with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn -c /root/custom-configuration.toml run\n"})}),(0,i.jsx)(n.p,{children:"Can have complete different settings from any of the following:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn -c /home/lgtn/.lightning/config.toml run\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn -c ~/.lightning/config.toml run\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn run\n"})}),(0,i.jsx)(n.p,{children:"Due to the fact that any of the fails above might contain different settings declared in the file body."})]}),"\n",(0,i.jsx)(n.p,{children:"For instance, we can imagine a scenario where our service is started with the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lgtn -c /home/lgtn/.lightning/config.toml run\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where the ",(0,i.jsx)(n.code,{children:"keystore"})," is placed under the parent directory ",(0,i.jsx)(n.code,{children:"/home/lgtn/.lightning/"}),". Resulting in the configuration file have the following settings for the hypothetical username ",(0,i.jsx)(n.code,{children:"lgtn"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'[signer]\nconsensus_key_path = "/home/lgtn/.lightning/keystore/consensus.pem"\nnode_key_path = "/home/lgtn/.lightning/keystore/node.pem"\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.a,{href:"/docs/node/install",children:"install instructions"})," provided by the documentation, a ",(0,i.jsx)(n.a,{href:"/docs/node/install#systemd-service-setup",children:"Systemd service unit"})," is recommended to allow the user control the Lightning service via systemctl. The Systemd service unit file should contain the recommended usage of ",(0,i.jsx)(n.code,{children:"-c"})," configuration. If you have followed the recommendations it should be familiar."]})}),"\n",(0,i.jsx)(n.h2,{id:"restoring-the-keystore",children:"Restoring the keystore"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"We've walked through most basics of where the configuration file is located, the configuration settings we use to set up and run the node, the different configuration sections we have, and most importantly the identity section."}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, a brief guide on the ",(0,i.jsx)(n.a,{href:"#identity",children:"identity"}),", more specifically an introduction to the ",(0,i.jsx)(n.a,{href:"#type-of-keys",children:"type of keys"})," and ",(0,i.jsx)(n.a,{href:"#key-privacy",children:"key privacy"}),", which we find important to understand for anyone seriously interested in running a node by hinting into some system administration and security principles."]}),"\n",(0,i.jsx)(n.p,{children:"Separately, at risk of oversimpliying provided a brief introduction into the backup of the keystore directory."}),"\n",(0,i.jsx)(n.p,{children:"In the future, we'll introduce more advanced topics that will help you improve the knowledge you get from this, but we are glad that you followed this guide and got some comprehension to help you manage the key store."}),"\n",(0,i.jsxs)(n.p,{children:["While we do our best to provide the clearest instructions, there's always space for improvement, therefore feel free to make any contributions by messaging us on our ",(0,i.jsx)(n.a,{href:"https://discord.gg/fleek",children:"Discord"})," or by opening a ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network",children:"PR"})," in any of our repositories."]}),"\n",(0,i.jsxs)(n.p,{children:["Discover more about the project by ",(0,i.jsx)(n.a,{href:"https://github.com/fleek-network/lightning",children:"watching/contributing on Github"}),", following us on ",(0,i.jsx)(n.a,{href:"https://twitter.com/fleek_net",children:"Twitter"}),", and joining ",(0,i.jsx)(n.a,{href:"https://discord.gg/fleek",children:"our community Discord"})," for all the best updates!"]}),"\n",(0,i.jsx)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5979:(e,n,t)=>{t.d(n,{ZP:()=>o});var i=t(5893),s=t(1151);function r(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You can restore the keystore (Public Keys) by copying the directory to the ",(0,i.jsx)(n.code,{children:"~/.lightning"})," directory."]}),"\n",(0,i.jsx)(n.p,{children:"Let's assume that you know where your backup directory or files are located. To keep our instructions easy to follow, let's say that:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The keystore and files are located under the hypothetical location ",(0,i.jsx)(n.code,{children:"/my-keystore-backup"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The files in the ",(0,i.jsx)(n.code,{children:"/my-keystore-backup"})," are the following:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/my-keystore-backup\n\u251c\u2500\u2500 consensus.pem\n\u2514\u2500\u2500 node.pem\n\n1 directory, 2 files\n"})}),"\n",(0,i.jsx)(n.p,{children:"Considering the above for our example, you would have to run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mv /my-keystore-backup /home/<YOUR-USERNAME>/.lightning/keystore\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Remember to replace the ",(0,i.jsx)(n.code,{children:"<YOUR-USERNAME>"})," with the correct username for the setup. For example, if you have installed the Fleek Network with the username ",(0,i.jsx)(n.code,{children:"lgtn"})," that would be ",(0,i.jsx)(n.code,{children:"/home/lgtn/.lightning/keystore"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Once moved, remember to start the service, you can learn how to manage the service by reading the section ",(0,i.jsx)(n.a,{href:"/docs/node/systemd-service",children:"Systemd Service"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},3872:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var i=t(5893);const s=e=>{let{image:n,name:t,title:s,url:r,communityMember:o=!1}=e;return(0,i.jsx)("section",{className:"author_card",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"avatar",children:(0,i.jsx)("a",{href:r,target:"_blank",alt:t,children:(0,i.jsx)("img",{src:n,alt:t})})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"name",children:(0,i.jsx)("a",{href:r,target:"_blank",alt:t,children:t})}),(0,i.jsx)("span",{className:"title",children:s}),(0,i.jsxs)("span",{className:"discord",children:[o?"Join our community on":"Got questions? Find us on"," ",(0,i.jsx)("a",{href:"https://discord.gg/fleek",target:"_blank",children:"discord!"})]})]})]})})}},4110:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/managing-the-keystore-fe4cdb19d2f59c54bcf864b0e069b535.png"},4350:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/managing-the-keystore-fe4cdb19d2f59c54bcf864b0e069b535.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);