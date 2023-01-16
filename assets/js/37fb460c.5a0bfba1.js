"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5735],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(f,r(r({ref:t},h),{},{components:a})):n.createElement(f,r({ref:t},h))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),i=a(1026),r=a(3872);const s={template:"post",draft:!1,hide_title:!0,title:"How to deal with files using Content Addressable aRchives",slug:"fleek-network-packing-content-addressed-data",date:new Date("2022-12-13T13:00:00.000Z"),canonical:"",description:"How to deal with files using Content Addressable aRchives",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network","GIT","CAR","Content Addressable aRchive"]},l=void 0,d={unversionedId:"Network nodes/fleek-network-packing-content-addressed-data",id:"Network nodes/fleek-network-packing-content-addressed-data",title:"How to deal with files using Content Addressable aRchives",description:"How to deal with files using Content Addressable aRchives",source:"@site/guides/Network nodes/fleek-network-packing-content-addressed-data.md",sourceDirName:"Network nodes",slug:"/Network nodes/fleek-network-packing-content-addressed-data",permalink:"/guides/Network nodes/fleek-network-packing-content-addressed-data",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Network nodes/fleek-network-packing-content-addressed-data.md",tags:[{label:"CDN",permalink:"/guides/tags/cdn"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"},{label:"GIT",permalink:"/guides/tags/git"},{label:"CAR",permalink:"/guides/tags/car"},{label:"Content Addressable aRchive",permalink:"/guides/tags/content-addressable-a-rchive"}],version:"current",lastUpdatedAt:1673551722,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"How to deal with files using Content Addressable aRchives",slug:"fleek-network-packing-content-addressed-data",date:"2022-12-13T13:00:00.000Z",canonical:"",description:"How to deal with files using Content Addressable aRchives",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network","GIT","CAR","Content Addressable aRchive"]},sidebar:"defaultSidebar",previous:{title:"Node Health Check guide",permalink:"/guides/Network nodes/fleek-network-node-health-check-guide"},next:{title:"Running a node in a Docker container",permalink:"/guides/Network nodes/fleek-network-running-a-node-in-a-docker-container"}},h={},p=[{value:"Introduction \u2600\ufe0f",id:"introduction-\ufe0f",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How does Fleek Network deal with files?",id:"how-does-fleek-network-deal-with-files",level:2},{value:"Immutability",id:"immutability",level:2},{value:"Content Addressing",id:"content-addressing",level:2},{value:"Hash functions",id:"hash-functions",level:2},{value:"Interplanetary linked data (IPLD)",id:"interplanetary-linked-data-ipld",level:2},{value:"Content Addressable aRchive (CAR)",id:"content-addressable-archive-car",level:2},{value:"Command line tools",id:"command-line-tools",level:2},{value:"IPFS Kubo",id:"ipfs-kubo",level:3},{value:"Adding files to IPFS",id:"adding-files-to-ipfs",level:3},{value:"Creating CAR files",id:"creating-car-files",level:2},{value:"IPFS-CAR library and CLI tool",id:"ipfs-car-library-and-cli-tool",level:2},{value:"Final Thoughts",id:"final-thoughts",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(546).Z,width:"2400",height:"1256"})),(0,o.kt)("h2",{id:"introduction-\ufe0f"},"Introduction \u2600\ufe0f"),(0,o.kt)("p",null,"Fleek Network uses the IPLD CAR (",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/specs/transport/"},"Content Adressable aRchive"),") as the data structure and packing of data in the network. IPLD provides the primitives to share valuable information in a flexible and extensible manner across the network for the semantic web or Linked Data vision of the next web \ud83d\udd2e. "),(0,o.kt)("p",null,"In this guide, we'll look into what we have on the web today for accessing files \ud83d\udd78, the web of tomorrow, the importance of immutable data, hash functions, content addressability, metadata and a practical hands-down approach to the handling of files in Fleek Network \u26a1\ufe0f."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some experience with command-line interfaces")),(0,o.kt)("p",null,"For other topics, check our ",(0,o.kt)("a",{parentName:"p",href:"fleek-network-getting-started-guide"},"getting started guide"),"."),(0,o.kt)(i.ZP,{mdxType:"CheckoutCommitWarning"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-does-fleek-network-deal-with-files"},"How does Fleek Network deal with files?"),(0,o.kt)("p",null,"The way content is handled, stored and distributed defines how trustworthy a protocol is \ud83e\udd1e. Some of the primitives to achieve it has roots in immutability, verification, the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/standards/semanticweb/"},"Semantic Web")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/standards/semanticweb/data"},"Linked Data"),". "),(0,o.kt)("p",null,"When you use Fleek Network, you either provide your data packed into a format called a Content Archive (",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/specs/transport/car"},"CAR"),") or an existing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid"},"CID")," of a CAR file, which hash addresses are unique and universally addressable \ud83d\udef8."),(0,o.kt)("h2",{id:"immutability"},"Immutability"),(0,o.kt)("p",null,"Some of the principles that help us provide guarantees to end-users require a high ability for content verification, as a consequence, the immutability of files is critical to the system. To emphasize, immutability means the state of not changing, or being unable to change!"),(0,o.kt)("p",null,"The web is nothing more and nothing less than a mirror of what it has become from within and among its main actors, the service providers, the central authorities \ud83d\udc6e\ud83c\udffb and the powers they have when managing user files."),(0,o.kt)("p",null,"Fleek Network deals with files in a manner where the content determines the address in which the user of the system can locate and verify it unquestionably \ud83d\udc69\ud83c\udffd\u200d\u2696\ufe0f. This is possible due to cryptography, in which the same data always produces the same hash deterministically."),(0,o.kt)("p",null,"A file whose content determines the hash, but is also impossible to invert it. We shouldn't be able to reconstruct the data from a hash. It's unique, not two files produce the same file or content. Thus, a small change in the content should always generate a completely different hash."),(0,o.kt)("p",null,'In retrospect \ud83d\udc75\ud83c\udffc, what we have on the web today are files accessible via a URL address and the problem with this approach is that the content is not intrinsically tight to the address e.g. the content can change and the URL remains the same. That is the problematic way we access files on the web today, which we call "Location addressing", and the way we solve it for the web of tomorrow is called "Content addressing".'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When content is immutable, we can verify its integrity and thus provide the ability get the content from anyone and everywhere. The ability to get it from anywhere, lead us to the decentralised and distributed nature of content storage and delivery in the Fleek Network.")),(0,o.kt)("h2",{id:"content-addressing"},"Content Addressing"),(0,o.kt)("p",null,"Content addressing is where we use a hash to access the content, and which allows us to verify that the content we received is the content we asked for \ud83d\udce2! For this we use a special hash called CID (",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid"},"Content Identifier"),"), a cryptography hash function that maps input of arbitrary size to the output of a fixed size - the content identifiers are short, regardless of the size of the content, and the address does not tell us where the content is stored. It's also interesting to observe, that the CID is a sort of string-like binary that is human-friendlier in comparison to the underlying binary, which is way longer \ud83e\udd16."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Caching and deduplication are possible due to immutability of content e.g. if content changes, let's say that an image has some new detail, the files share many of the same bytes. The amount of data we have to transfer to fetch is minimum, we'd only pull the difference. In today's web, we'd have to transfer both files in full, which is a worse path on resource allocation and performance.")),(0,o.kt)("h2",{id:"hash-functions"},"Hash functions"),(0,o.kt)("p",null,"The hash function for creating ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid"},"CID's")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"sha-256"),", but there is support for other hashing algorithms, such as sha1 (used by Git), sha2-256, sha3-255, blake2b-160, etc. Some older algorithms are proven not to be collision-free, so if algorithms can break, we have to switch the hash algorithm we use in the future! The problem with this switching of algorithms is the need to find a future-proof way of identifying the hash functions used to generate the hash, as well as the hash name."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://multiformats.io/multihash/"},"Multihash")," is a protocol that comes into play to provide us the valuable metadata for future-proofing. \ud83d\ude4b\u200d\u2640\ufe0f To explain it in simple terms we'll provide an example, it is the composition where a hash is placed at the end, a prefix as a number to identify the algorithm used and a number to identify the hash name. Thereafter, we'd start raising some questions. With the simple example provided here, how would we get the data back without the ability to identify how it was encoded? Some users could use ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CBOR"},"cbor"),", ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Protocol_Buffers"},"protocol buffers"),", ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"json"),", etc; and there might be plenty of good reasons why for those choices. Maybe it's a compact binary encoding that is very efficient for storage, easy to work with, etc."),(0,o.kt)("p",null,"What's important is that it is the user's choice and why ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io"},"IPLD")," becomes useful for Fleek Network's use cases. A system for understanding and working with data made up of a ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/intro/hello-world/#data-model-and-codecs"},"Data Model")," and ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/intro/hello-world/#data-model-and-codecs"},"Codecs"),", some tools for ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/intro/hello-world/#linking"},"Linking"),", and then a handful of other ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/intro/hello-world/#powerful-features"},"Powerful Features")," that help ups \ud83d\udc77 develop a decentralized application."),(0,o.kt)("h2",{id:"interplanetary-linked-data-ipld"},"Interplanetary linked data (IPLD)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/"},"Interplanetary linked data (IPLD)")," provides us with all the metadata prefixes to soothe the system needs, and provides us with the data model of the content-addressable web, as discussed earlier. IPLD is a set of conventions for creating decentralized data structures that are universally addressable and linkable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These addressable and linkable data structures will allow us to do for data what URLs and links did for HTML web pages (Quote from ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/"},"IPLD"),").")),(0,o.kt)("h2",{id:"content-addressable-archive-car"},"Content Addressable aRchive (CAR)"),(0,o.kt)("p",null,"For all the reasons demonstrated here \ud83d\udc81\u200d\u2640\ufe0f, Fleek Network uses the IPLD CAR ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/specs/transport/"},"Content Addressable aRchive")," to transport IPLD data. IPLD defines transport as file and stream format, meaning packing IPLD data together and interactivity that involves requests and responses."),(0,o.kt)("p",null,"As discussed above in ",(0,o.kt)("a",{parentName:"p",href:"#hash-functions"},"Hash functions -> multihash"),", the CAR files contain data encoded in a particular codec, in the Fleek Network, we support any IPLD codec, e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/codecs/known/dag-pb/"},"dag-pb"),", which uses a stricter subset of Protocol Buffers to encode an object graph."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/codecs/known/dag-pb/"},"DAB-PB")," is a codec that implements a very small subset of the IPLD Data Model in a particular set Protobuf messages. But there are other known ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/codecs/known/"},"codecs"),".")),(0,o.kt)("p",null,"Fleek Network only works with car files (",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/specs/transport/car/carv1/"},"CARv1"),") and (",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/specs/transport/car/carv2/"},"CARv2"),") soon, this means that it only computes car files, as input and output! Therefore, the decoding of the files is handled by the clients. We're still in early development days, where a client library is in early development, which should abstract some possible hurdles, and be simple to use \ud83c\udf08."),(0,o.kt)("h1",{id:"using-car-files"},"Using CAR files"),(0,o.kt)("p",null,"As shared above in our discussion about the supported codecs, such as ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io/docs/codecs/known/dag-pb/"},"DAB-PB")," for ",(0,o.kt)("a",{parentName:"p",href:"#content-addressable-archive-car"},"Content Adressable aRchive (CAR)"),", inside these object graphs, we find a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ipfs/specs/blob/main/UNIXFS.md"},"UnixFS")," object describing files, directories and symlinks. So, let's have a brief look at it."),(0,o.kt)("p",null,"To get us started, we'll take a look into some command line tools to help us create and interact with CAR files. In the future, we'll look into how to integrate these into your projects by looking at libraries, SDKs, etc."),(0,o.kt)("h2",{id:"command-line-tools"},"Command line tools"),(0,o.kt)("h3",{id:"ipfs-kubo"},"IPFS Kubo"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/command-line/"},"IPFS Kubo")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev"},"Go"),"-based implementation of the InterPlanetary File System (IPFS) protocol. Official binary distributions are provided if you are not planning to build it yourself from the source."),(0,o.kt)("p",null,"Follow the instructions to install it ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/command-line/#install-official-binary-distributions"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Some users might refer to IPFS Kubo as ",(0,o.kt)("inlineCode",{parentName:"p"},"go-ipfs"),", the previous name.")),(0,o.kt)("p",null,"IPFS Kubo supports exporting any IPFS object graph into a CAR file and importing data from CAR files into your local IPFS repository."),(0,o.kt)("p",null,'Once "IPFS" is installed, you should do a quick health check to confirm its working correctly:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ipfs --version\n")),(0,o.kt)("p",null,"Here's how the output should look like (the version you find below is illustrative only, yours might be slightly different):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ipfs version X.X.X\n")),(0,o.kt)("h3",{id:"adding-files-to-ipfs"},"Adding files to IPFS"),(0,o.kt)("p",null,"Initialise IPFS on your machine, to generate an IPFS repo with a standard default configuration file. The config file is saved as config in your repo root directory by default ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ipfs/config"),". If interested in learning more about the config, check the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/how-to/default-profile/"},"docs"),"."),(0,o.kt)("p",null,"To initialise IPFS, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ipfs init\n")),(0,o.kt)("p",null,"Here's what our output looks like, yours will be slightly different but similar."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"generating ED25519 keypair...done\npeer identity: XXXXXXXXXXXXXXXXXXXXXXX\ninitializing IPFS node at /Users/<YOUR-USERNAME>/.ipfs\n")),(0,o.kt)("p",null,"Find all subcommands available by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipfs --help\n")),(0,o.kt)("p",null,"Let's create a new file to use as an example afterward, a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.txt")," that has some content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo 'Hello world!' > hello.txt\n")),(0,o.kt)("p",null,"Add the file by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," subcommand, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ipfs add hello.txt\n")),(0,o.kt)("p",null,"We're not running the IPFS daemon, it'll just add the file locally."),(0,o.kt)("p",null,"The output should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"added QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM hello.txt\n 13 B / 13 B [==================================================] 100.00%\n")),(0,o.kt)("p",null,"The CID for our ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.text")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM"),", this is the content's cryptographic hash. If the file content changes, the hash will change, otherwise if the file's content's the same, the hash will always be the same, as described ",(0,o.kt)("a",{parentName:"p",href:"#immutability"},"here"),"."),(0,o.kt)("p",null,'\ud83d\udca1 Notice that our string starts with a "Qm" which refers to the v0 of CID. The v1 of CID starts with "Bafy", or "Bafk" sometimes. You can learn a lot from the CID by using the ',(0,o.kt)("a",{parentName:"p",href:"https://cid.ipfs.tech/#QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM"},"cid.ipfs.tech")," tool. We can do ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/content-addressing/#cid-conversion"},"CID conversion")," from v0 to v1 using the ipfs cli."),(0,o.kt)("p",null,"Now that we have a CID ",(0,o.kt)("inlineCode",{parentName:"p"},"QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM"),", we can read the content out of IPFS just as we'd do with a regular ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," command when reading content of a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ipfs cat QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM\n")),(0,o.kt)("p",null,"We'll get the same output, as the input provided above when we created the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.txt")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Hello world!\n")),(0,o.kt)("p",null,"When we execute ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfs cat")," to read the file content, it returns the content of the file, not the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.txt")," file."),(0,o.kt)("p",null,'Let\'s take the output of our echo "Hello world" (stdout) and pass directly on the standard input (stdin) of ipfs add.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo 'Hello world!' | ipfs add\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"added QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM\n 13 B / 13 B [==================================================] 100.00%\n")),(0,o.kt)("p",null,"You'll always get the same hash because as far as IPFS is concerned, it is the same content and the filename doesn't matter."),(0,o.kt)("h2",{id:"creating-car-files"},"Creating CAR files"),(0,o.kt)("p",null,"To create a CAR file using ",(0,o.kt)("a",{parentName:"p",href:"#ipfs-kubo"},"IPFS Kubo"),", you can redirect the output of ipfs dag export to a file. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ipfs dag export <CID> > path/to/filename.car\n")),(0,o.kt)("p",null,"\ud83d\udca1 Notice that when we mention ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/filename.car"),", that's literally asking you to provide a location in your filesystem where to save the file to."),(0,o.kt)("p",null,"We have the CID ",(0,o.kt)("inlineCode",{parentName:"p"},"QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM")," we got earlier, let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"basic.car")," file."),(0,o.kt)("p",null,"We do this by redirecting the output of the ipfs dag export to the new ",(0,o.kt)("inlineCode",{parentName:"p"},"basic.car")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ipfs dag export QmXgBq2xJKMqVo8jZdziyudNmnbiwjbpAycy5RbfDBoJRM > ./basic.car\n")),(0,o.kt)("p",null,"We'll get the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"0s  113 B / ? [---------------------=----------------------] 998 B/s 0s\n")),(0,o.kt)("p",null,"Also, we should find the file we just created in our current work directory. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," to list directory contents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"drwxr-xr-x  3 fleek  staff   96 14 Dec 16:08 .\ndrwxr-xr-x  5 fleek  staff  160 14 Dec 16:08 ..\n-rw-r--r--  1 fleek  staff  113 14 Dec 16:08 basic.car\n")),(0,o.kt)("p",null,"Depending on where you've saved the file, the list should be different but your file should be located there, in the path you provided earlier."),(0,o.kt)("p",null,"If you inspect the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"basic.car"),", you'll notice that there are some funny\ncharacters. The content is encoded and thus not used as it is to access data."),(0,o.kt)("h2",{id:"ipfs-car-library-and-cli-tool"},"IPFS-CAR library and CLI tool"),(0,o.kt)("p",null,"There's a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/web3-storage/ipfs-car"},"library")," and CLI-tool for the purpose of packing and unpacking files."),(0,o.kt)("p",null,"If you are interested, check the repository for the project to install it, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/web3-storage/ipfs-car"},"here"),"."),(0,o.kt)("p",null,"Otherwise, if you have nodejs set up on your system, you can do a quick check and run some commands by preceeding the package name with ",(0,o.kt)("inlineCode",{parentName:"p"},"npx"),". "),(0,o.kt)("p",null,"We're assuming that you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"basic.car")," provided in our guide ",(0,o.kt)("a",{parentName:"p",href:"#creating-car-files"},"Creating CAR files"),", or creating a new file to use as an example."),(0,o.kt)("p",null,"The file we're creating gets the output from ",(0,o.kt)("a",{parentName:"p",href:"http://ipfs.io/ipfs/bafybeieqjclrxiva2tqfuii7kyc5fhggncetd5g5gdm5esxh2egmdwuqee"},"here"),", as the filename ",(0,o.kt)("inlineCode",{parentName:"p"},"planet.jpg"),". You can provide a different name if you wish."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://ipfs.io/ipfs/bafybeieqjclrxiva2tqfuii7kyc5fhggncetd5g5gdm5esxh2egmdwuqee -o planet.jpg\n")),(0,o.kt)("p",null,"We can then pack ",(0,o.kt)("inlineCode",{parentName:"p"},"planet.jpg"),", if an ",(0,o.kt)("inlineCode",{parentName:"p"},"--output")," is not provided it defaults to the base filename."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx ipfs-car --pack planet.jpg --output planet.car\n")),(0,o.kt)("p",null,"Where output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"root CID: bafybeicfhsvyehkt2nfmcln43htotivt6yglb4zysuv2l3xzzu4kb2c63q\n  output: planet.car\n")),(0,o.kt)("p",null,"Could then list the content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx ipfs-car --list planet.car\n")),(0,o.kt)("p",null,"The output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bafybeicfhsvyehkt2nfmcln43htotivt6yglb4zysuv2l3xzzu4kb2c63q\nbafybeicfhsvyehkt2nfmcln43htotivt6yglb4zysuv2l3xzzu4kb2c63q/planet.jpg\n")),(0,o.kt)("p",null,"Then after, if you unpack you'll get the corresponding directory and filename:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx ipfs-car --unpack planet.car\n")),(0,o.kt)("p",null,"Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"bafy...63q")," we have the ",(0,o.kt)("inlineCode",{parentName:"p"},"planet.jpg")," file that holds our original content gathered via the curl command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 bafybeicfhsvyehkt2nfmcln43htotivt6yglb4zysuv2l3xzzu4kb2c63q\n\u2502\xa0\xa0 \u2514\u2500\u2500 planet.jpg\n\u251c\u2500\u2500 planet.car\n\u2514\u2500\u2500 planet.jpg\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfs-car")," is a thin wrapper over ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ipld/js-car"},"@ipld/car")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ipfs/js-ipfs-unixfs"},"unix-fs"),". If your use case requires you to do more, then you're much better at looking deeper into the subject, which is out-of-scope for this guide, we're afraid."),(0,o.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,o.kt)("p",null,"We've looked into the current state of the web today, how's the current state of accessing files, and the web of tomorrow. \ud83e\udd16 Discussed some of the principles in line with the Fleek Network, such as the importance of immutable data, hash functions, content addressability, metadata, etc."),(0,o.kt)("p",null,"We have then provided a ",(0,o.kt)("a",{parentName:"p",href:"#creating-car-files"},"demonstration")," of how to deal with files in the Fleek Network. Keeping things simple to get you started into dealing with Content addressed data \ud83d\ude43."),(0,o.kt)("p",null,"While we try our best to provide you with the best information, we are not free of typos and software updates. \ud83d\udc4c Feel free to provide us with any feedback to help us improve our guides!"),(0,o.kt)("p",null,"Discover more about the project by watching or contributing on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"Github"),", following us on ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,o.kt)(r.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}u.isMDXComponent=!0},1026:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(7462),o=(a(7294),a(3905));const i={toc:[]};function r(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83e\udd16 As Fleek Network's repositories are in constant development and change, you should consider that the following guide was ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-checkout"},"checked in")," to commit ",(0,o.kt)("inlineCode",{parentName:"p"},"e31e814"),". While we try our best to update documentation and guides during development, there might be breaking changes that might take some time to reflect in our docs. To avoid disappointment, feel free to check into commit ",(0,o.kt)("inlineCode",{parentName:"p"},"e31e814")," or contribute by getting in touch with us, or sending a PR in the relevant context. Learn how to checkout a commit in our repository history ",(0,o.kt)("a",{parentName:"p",href:"../../reference/Git/how-to-checkout-a-commit-in-project-history"},"here")," \ud83d\ude4f.")))}r.isMDXComponent=!0},3872:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294);const o=e=>{let{image:t,name:a,title:o,url:i}=e;return n.createElement("section",{className:"author_card"},n.createElement("div",null,n.createElement("span",null,n.createElement("a",{href:i,target:"_blank",alt:a},n.createElement("img",{src:t,alt:a}))),n.createElement("div",null,n.createElement("span",{className:"name"},n.createElement("a",{href:i,target:"_blank",alt:a},a)),n.createElement("span",{className:"title"},o),n.createElement("span",{className:"discord"},"Got questions? Find us on ",n.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},546:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fleek-network-how-fleek-network-deals-with-files-de5feca294fe618ae97611f43db381e3.png"}}]);