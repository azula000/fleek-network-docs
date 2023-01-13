"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[2770],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6191:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=o(7462),a=(o(7294),o(3905)),r=o(1026),i=o(3872);const s={template:"post",draft:!1,hide_title:!0,title:"Node Health Check guide",slug:"fleek-network-node-health-check-guide",date:new Date("2023-01-04T23:00:00.000Z"),canonical:"",description:"The purpose of the guide is to provide basic information about the node resource by explaining the host, port numbers, logs during runtime, etc for the Fleek Network.",category:"Tutorial",tags:["DCDN","Guide","Getting Started","Fleek Network","health checks"]},l=void 0,p={unversionedId:"Network nodes/fleek-network-node-healthchecks",id:"Network nodes/fleek-network-node-healthchecks",title:"Node Health Check guide",description:"The purpose of the guide is to provide basic information about the node resource by explaining the host, port numbers, logs during runtime, etc for the Fleek Network.",source:"@site/guides/Network nodes/fleek-network-node-healthchecks.md",sourceDirName:"Network nodes",slug:"/Network nodes/fleek-network-node-health-check-guide",permalink:"/guides/Network nodes/fleek-network-node-health-check-guide",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Network nodes/fleek-network-node-healthchecks.md",tags:[{label:"DCDN",permalink:"/guides/tags/dcdn"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"},{label:"health checks",permalink:"/guides/tags/health-checks"}],version:"current",lastUpdatedAt:1673606530,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"Node Health Check guide",slug:"fleek-network-node-health-check-guide",date:"2023-01-04T23:00:00.000Z",canonical:"",description:"The purpose of the guide is to provide basic information about the node resource by explaining the host, port numbers, logs during runtime, etc for the Fleek Network.",category:"Tutorial",tags:["DCDN","Guide","Getting Started","Fleek Network","health checks"]},sidebar:"defaultSidebar",previous:{title:"Fleek Network: Managing the key store",permalink:"/guides/Network nodes/fleek-network-managing-the-key-store"},next:{title:"How to deal with files using Content Addressable aRchives",permalink:"/guides/Network nodes/fleek-network-packing-content-addressed-data"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"What&#39;s a node health check?",id:"whats-a-node-health-check",level:2},{value:"Resource monitoring",id:"resource-monitoring",level:2},{value:"Processes",id:"processes",level:3},{value:"Log messages",id:"log-messages",level:3},{value:"Host",id:"host",level:3},{value:"Ports",id:"ports",level:3},{value:"How to do a check-up?",id:"how-to-do-a-check-up",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:u};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9635).Z,width:"2400",height:"1256"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In Software development, a health check means checking the health status of a resource to determine whether the resource is operating correctly."),(0,a.kt)("p",null,"The purpose of the guide is to provide basic information about the node resource by explaining the host, port numbers, logs during runtime, etc for Fleek Network."),(0,a.kt)("p",null,"You should have followed our ",(0,a.kt)("a",{parentName:"p",href:"#fleek-network-getting-started-guide"},"getting started guide")," and have the Ursa CLI installed in the machine terminal you're accessing to follow along."),(0,a.kt)("p",null,"We'll give you a basic introduction to the topic, but you should also appreciate the fact that development is ongoing, and other factors, such as the introduction of features that may cause malfunction of a node beyond what a simple health check can hint about the network."),(0,a.kt)("p",null,"For any unexpected behavior, we appreciate the contribution of the community by any means which includes reporting to our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord"),", opening a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network"},"PR"),", reporting issues in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/issues"},"Github repository"),", etc."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"To follow the guide, you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Familiarity with the command-line interface"),(0,a.kt)(r.ZP,{mdxType:"CheckoutCommitWarning"}))),(0,a.kt)("h2",{id:"whats-a-node-health-check"},"What's a node health check?"),(0,a.kt)("p",null,"A Node health check is exactly what it sounds like, a way of checking the health status of a Fleek Network node!"),(0,a.kt)("p",null,"A Node operator can do a health check (as it's common among system operators worth their title) to get feedback and see if the resource is working! It's a good practice for a Node operator to do it frequently, as otherwise there'd be no way of knowing whether or not the Node is running. For example, some advanced operators automate this process by using cronjobs and getting reports via email, etc."),(0,a.kt)("p",null,"Health checks are valuable and a must for all the Node operators, as they are incentivized to participate in the network by making their resources available which the reward mechanism evaluates."),(0,a.kt)("p",null,"Rewards are only a given for good behavior and thus an unhealthy Node or bad management can cause disappointment. A decentralized and permissionless network, which is beyond anyone's control (us included) requires some education by the users."),(0,a.kt)("p",null,'A system can be highly customizable and understanding some basics can help you achieve success as a node operator, resource health checking is important! There are many reasons why\'d want to learn how to operate, such as the "how to do node health checks" we instruct here.'),(0,a.kt)("p",null,"Fleek Network depends on the Node operator's success, thus we try to keep things simple and try to motivate you to learn for the network's overall health! That's what a Node health check is about, your contribution!"),(0,a.kt)("h2",{id:"resource-monitoring"},"Resource monitoring"),(0,a.kt)("p",null,"The Fleek Network Node is initialized by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ursa CLI")," which creates a process in the operating system, this process responds to requests over an inter-communication mechanism we denominate as the Fleek Network - Fleek's DCDN (Decentralized Content Delivery Network). "),(0,a.kt)("p",null,"We can call the Fleek Network Node a service, meaning that the Node is a sort of application that runs as a service on a server, or in the practical sense, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ursa CLI")," initializes a Node as a client version used to access the main service provider, the Fleek Network, composed by any number of these Nodes!"),(0,a.kt)("p",null,"As Fleek Network is used by getting and serving content, the Node responds as a resource in the system, thus providing a certain level of detail to the end-user, for our guide use case, the Node operator. Running Nodes write to the stdout (standard output stream) well-defined log messages, some more human-friendly than others."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#log-messages"},"Log messages")," are well formatted, with an identifier describing the type: Warning, Error, etc."),(0,a.kt)("p",null,"As ",(0,a.kt)("inlineCode",{parentName:"p"},"Ursa CLI")," is in constant development, at the current development stage the output from the Node should be super verbose."),(0,a.kt)("p",null,"This is to help the development team get feedback. You might see ",(0,a.kt)("inlineCode",{parentName:"p"},"logs")," of the types: Debug, Trace, etc; which for a non-developer human, can cause the feeling of reading the most dreadful poetry in literature, as it'd only spark joy to help troubleshoot or make development decisions. As in any book title and book content, feel free to ignore it but don't judge the book by its cover!"),(0,a.kt)("h3",{id:"processes"},"Processes"),(0,a.kt)("p",null,"We recommend running the Stack (for docker-compose users), which provides a proxy, HTTPS, monitoring and analytics capability to your server that is running the Node. You can find instructions on how to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack")," ",(0,a.kt)("a",{parentName:"p",href:"#fleek-network-running-a-node-in-a-docker-container"},"here"),"!"),(0,a.kt)("p",null,"\ud83d\udca1 The ",(0,a.kt)("inlineCode",{parentName:"p"},"Ursa")," Node can run on its own without any of the dependencies suggested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack"),", but we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack")," to describe a common use-case scenario or some of the common practices you'd find among Node operator and system administrators setups. You can customize and monitor ",(0,a.kt)("inlineCode",{parentName:"p"},"Ursa")," Node on your own, if you prefer, you can then skip to ",(0,a.kt)("a",{parentName:"p",href:"#ports"},"ports"),"."),(0,a.kt)("p",null,"The Stack has the following services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node - we call ",(0,a.kt)("inlineCode",{parentName:"li"},"Ursa")," the living process that we refer to as Node, this is started via the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ursa CLI")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ports 4069, 6009, 8070"),")"),(0,a.kt)("li",{parentName:"ul"},"Reverse proxy - we use ",(0,a.kt)("inlineCode",{parentName:"li"},"NGINX")," as a reverse proxy for ",(0,a.kt)("inlineCode",{parentName:"li"},"Ursa")," Node service where we have configured the public port 80, SSL certification, a server name, etc. Port 80 maps to the ",(0,a.kt)("inlineCode",{parentName:"li"},"4069")," internally, as to provide a secure connection over HTTP"),(0,a.kt)("li",{parentName:"ul"},"Process monitoring - a monitoring system for real-time metrics with a web client (",(0,a.kt)("inlineCode",{parentName:"li"},"port 9090"),") that exposes metrics of the reverse proxy (",(0,a.kt)("inlineCode",{parentName:"li"},"port 9113"),") and the actual Node metrics (",(0,a.kt)("inlineCode",{parentName:"li"},"port 4069"),")"),(0,a.kt)("li",{parentName:"ul"},"Metric visualization - for visualizing metrics, logs, and traces collected from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ursa")," Node we have Grafana (",(0,a.kt)("inlineCode",{parentName:"li"},"port 3000"),")")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack")," is our recommendation but we only provide support for ",(0,a.kt)("inlineCode",{parentName:"p"},"Ursa CLI"),". Thus, support for ",(0,a.kt)("inlineCode",{parentName:"p"},"Grafana"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Nginx")," is on the operator side."),(0,a.kt)("h3",{id:"log-messages"},"Log messages"),(0,a.kt)("p",null,"Log messages are well formatted and have an associated type, as described in the ",(0,a.kt)("a",{parentName:"p",href:"#processes"},"processes"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ERROR - The ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," designates very serious errors."),(0,a.kt)("li",{parentName:"ul"},"WARN - The ",(0,a.kt)("inlineCode",{parentName:"li"},"warning")," designates hazardous situations."),(0,a.kt)("li",{parentName:"ul"},"INFO - The ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," designates useful information."),(0,a.kt)("li",{parentName:"ul"},"DEBUG - The ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")," designates lower-priority information."),(0,a.kt)("li",{parentName:"ul"},"TRACE - The ",(0,a.kt)("inlineCode",{parentName:"li"},"trace")," designates very low-priority, often extremely verbose, information.")),(0,a.kt)("p",null,"Depending on development time, some Log message types might be present in your output that offer very low-priority information but that can be of good use for the development team, e.g. the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," are good examples. "),(0,a.kt)("p",null,"\ud83d\ude4f We understand this can be quite intimidating at the time, but expect to reduce the verbosity of the output as soon as possible!"),(0,a.kt)("p",null,"Here's an example, yours might differ a bit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'2022-11-23T20:23:09.440690Z  INFO ursa_rpc_client: Using JSON-RPC v2 HTTP URL: <http://0.0.0.0:4069/rpc/v0>\n2022-11-23T20:23:09.441011Z  INFO surf::middleware::logger::native: sending request\n2022-11-23T20:23:09.451132Z  INFO surf::middleware::logger::native: request completed\n2022-11-23T20:23:09.451216Z  INFO ursa::ursa::rpc_commands: Put car file done: "bafybeifyjj2bjhtxmp235vlfeeiy7sz6rzyx3lervfk3ap2nyn4rggqgei"\nursa_1           | DEBUG libp2p_gossipsub::behaviour Starting heartbeat\nursa_1           | DEBUG libp2p_gossipsub::behaviour HEARTBEAT: Mesh low. Topic: /ursa/global Contains: 0 needs: 4\nursa_1           | DEBUG libp2p_gossipsub::behaviour RANDOM PEERS: Got 0 peers\nursa_1           | TRACE hyper::proto::h1::encode sized write, len = 17809\nursa_1           | TRACE hyper::proto::h1::io buffer.queue, self.len=120, buf.len=17809\n')),(0,a.kt)("p",null,"Where also,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'nginx_1          | 172.19.0.3 - - [06/Jan/2023:18:29:38 +0000] "GET /stub_status HTTP/1.1" 200 99 "-" "Go-http-client/1.1" "-"\nnginx_1          | 172.19.0.3 - - [06/Jan/2023:18:29:43 +0000] "GET /stub_status HTTP/1.1" 200 99 "-" "Go-http-client/1.1" "-"\nnginx_1          | 172.19.0.3 - - [06/Jan/2023:18:29:48 +0000] "GET /stub_status HTTP/1.1" 200 99 "-" "Go-http-client/1.1" "-"\ngrafana_1        | logger=cleanup t=2023-01-06T18:29:51.663801631Z level=info msg="Completed cleanup jobs" duration=16.523158ms\nnginx_1          | 172.19.0.3 - - [06/Jan/2023:18:29:53 +0000] "GET /stub_status HTTP/1.1" 200 99 "-" "Go-http-client/1.1" "-"\n')),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("p",null,"When Ursa Node is initialized, the address which is bound to be the ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0``, meaning that the service is listening to all the host-configured network interfaces, such as "),"127.0.0.1`."),(0,a.kt)("p",null,"Any traffic sent to an addressable interface that hits the correct endpoint or port number should have a response by the Node. Of course, bear in mind that your system should not have any form of firewall or blockers configured!"),(0,a.kt)("h3",{id:"ports"},"Ports"),(0,a.kt)("p",null,"A Fleek Network Node, or the process we refer to as Node has bound to ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," and has a port exposed to the host, port 6009 and in the Stack's network, port 4069."),(0,a.kt)("p",null,"Below, we explain what these are used for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Port ",(0,a.kt)("inlineCode",{parentName:"li"},"4069")," (TCP), used for HTTP RPC, RPC, REST and metrics"),(0,a.kt)("li",{parentName:"ul"},"Port ",(0,a.kt)("inlineCode",{parentName:"li"},"6009")," (TCP/UDP), used by the P2P protocol running in the network")),(0,a.kt)("p",null,"\ud83d\udca1 To communicate, the Node uses TCP and UDP (retransmission of lost data packets is only possible with TCP, for example, when we download a file from the internet through our browsers we expect a complete file, no bits should be missing, TCP ensures that the data is received correctly, data is not missing and is in order)."),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",{parentName:"p",href:"#processes"},"processes"),", the ports should be available in the host for other services to operate! Make sure you don't have blockers, such as Firewall, or forget to expose them in Docker or on your custom setup! Open up your firewall, and if needed do a port-forward if docker doesn't do that for you."),(0,a.kt)("p",null,"\u26a0\ufe0f Remember, the Node won't be able to respond if the ports are blocked. This might be quite difficult to troubleshoot, so make sure you have control over your system permissions to guarantee a successful node operation."),(0,a.kt)("h2",{id:"how-to-do-a-check-up"},"How to do a check-up?"),(0,a.kt)("p",null,"You should have completed the topics above to understand what and why the endpoints are available. We expect you to know, that the system should not have a firewall or any blockers on the required ports in either Docker or other custom setups. If you ignore this, your Node will malfunction and cause disappointment. Fleek Network is decentralized and permissionless, it's your responsibility to fully understand the basics, at the very least, to have a Node running successfully! The guides are your friends!"),(0,a.kt)("p",null,"We're going to use ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/"},"cURL"),", make sure that you have it installed otherwise install it in your operating system."),(0,a.kt)("p",null,"In any case, you should have the Node running to be able to follow the steps. We'll use the Docker Container version but if you have a custom setup in a server or host you'll be able to follow."),(0,a.kt)("p",null,"For the ones who followed the ",(0,a.kt)("a",{parentName:"p",href:"#fleek-network-getting-started-guide"},"getting started guide"),", the following request should be familiar."),(0,a.kt)("p",null,"We execute a ",(0,a.kt)("inlineCode",{parentName:"p"},"cURL")," request with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--head")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-I")," flag to show the document info only, in our case the headers of our HTTP response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl 127.0.0.1/ping\n")),(0,a.kt)("p",null,"The response should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pong\n")),(0,a.kt)("p",null,"You can also check the headers of the response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -I 127.0.0.1/ping\n")),(0,a.kt)("p",null,"Which response is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"HTTP/1.1 200 OK\nServer: nginx/1.23.3\nDate: Fri, 06 Jan 2023 20:07:16 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: 4\nConnection: keep-alive\ncontent-type: application/vnd.ipld.raw\ncontent-type: application/vnd.ipld.car\ncontent-type: application/octet-stream\ncache-control: public,max-age=31536000,immutable\nX-Proxy-Cache: HIT\n")),(0,a.kt)("p",null,"We can do the same for other ports, and you'll notice different responses where for port ",(0,a.kt)("inlineCode",{parentName:"p"},"6009"),", get an empty reply from the server because it works over a different protocol which is not HTTP/S, as described ",(0,a.kt)("a",{parentName:"p",href:"#ports"},"above"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl: (52) Empty reply from server\n")),(0,a.kt)("p",null,"\u26a0\ufe0f A curl (52) usually means ",(0,a.kt)("em",{parentName:"p"},"something")," accepted the TCP connection but just closed it. For our use case, we can take this as something running in port ",(0,a.kt)("inlineCode",{parentName:"p"},"6009"),". Although, there are more appropriate ways to check this in particular. In comparison, port ",(0,a.kt)("inlineCode",{parentName:"p"},"4069")," is used for HTTP RPC, REST, and metrics, which operate via HTTP, as such a Http Header is expected but not for ",(0,a.kt)("inlineCode",{parentName:"p"},"6009"),"."),(0,a.kt)("p",null,"You can determine failure when you make a ",(0,a.kt)("inlineCode",{parentName:"p"},"cURL")," request which fails:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl: (7) Failed to connect to 127.0.0.1 port 80: Connection refused\ncurl: (7) Failed to connect to 127.0.0.1 port 6009: Connection refused\n")),(0,a.kt)("p",null,"If you're running the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack")," (docker-compose), then a service like ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," (",(0,a.kt)("inlineCode",{parentName:"p"},"port 9090"),") or ",(0,a.kt)("inlineCode",{parentName:"p"},"Grafana")," (",(0,a.kt)("inlineCode",{parentName:"p"},"port 3000"),") could also be checked!"),(0,a.kt)("p",null,"As an example, since ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," provides a dashboard you can expect some HTML in the response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -I 127.0.0.1:9090\n")),(0,a.kt)("p",null,"Response is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"HTTP/1.1 405 Method Not Allowed\nAllow: GET, OPTIONS\nContent-Type: text/plain; charset=utf-8\nX-Content-Type-Options: nosniff\nDate: Wed, 04 Jan 2023 19:28:04 GMT\nContent-Length: 19\n")),(0,a.kt)("p",null,"\ud83d\udca1 You can open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9090")," to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus")," dashboard, and if you'd like to open it from any location outside your network, you need a bit of work in the server setup, the same for any of the endpoints or ports described in this guide. Checking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack")," (docker-compose) can give you an idea of how that'd look in terms of configuration or where to find the configuration file of those services, for example, the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/blob/cd6fb3d21ce647dc3f06ee9128ba2a4164623ee5/docker/full-node/docker-compose.yml"},"full-node")," can be used as a reference."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We started by going through ",(0,a.kt)("a",{parentName:"p",href:"#whats-a-node-health-check"},"What a node Health Check")," means and looked into ",(0,a.kt)("a",{parentName:"p",href:"#resource-monitoring"},"Resource monitoring")," and the parts the resource provides, such as ",(0,a.kt)("a",{parentName:"p",href:"#log-messages"},"Log messages"),", ",(0,a.kt)("a",{parentName:"p",href:"#processes"},"Processes"),", ",(0,a.kt)("a",{parentName:"p",href:"#host"},"Host"),", ",(0,a.kt)("a",{parentName:"p",href:"#ports"},"Ports"),", with some warnings along the way about firewalls."),(0,a.kt)("p",null,"To complete this, we demonstrated how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"cURL")," to do a simple health check to verify if the endpoints or ports are in use by expecting particular responses. We found out about at least one different request which is closed immediately, as it's not an HTTP/S request and provided some hints or some thoughts on how to leverage this information."),(0,a.kt)("p",null,"Finally, we hinted that exposing services externally requires a bit more setup, and the Docker compose file can be used as a reference to get you started."),(0,a.kt)("p",null,"While we do our best to provide the clearest instructions, there's always space for improvement, therefore feel free to make any contributions by messaging us on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," or by opening a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network"},"PR")," in any of our repositories \ud83d\ude4f."),(0,a.kt)("p",null,"Discover more about the project by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"watching/contributing on Github"),", following us on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,a.kt)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}d.isMDXComponent=!0},1026:(e,t,o)=>{o.d(t,{ZP:()=>i});var n=o(7462),a=(o(7294),o(3905));const r={toc:[]};function i(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83e\udd16 As Fleek Network's repositories are in constant development and change, you should consider that the following guide was ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-checkout"},"checked in")," to commit ",(0,a.kt)("inlineCode",{parentName:"p"},"180585c"),". While we try our best to update documentation and guides during development, there might be breaking changes that might take some time to reflect in our docs. To avoid disappointment, feel free to check into commit ",(0,a.kt)("inlineCode",{parentName:"p"},"180585c")," or contribute by getting in touch with us, or sending a PR in the relevant context. Learn how to checkout a commit in our repository history ",(0,a.kt)("a",{parentName:"p",href:"../../reference/Git/how-to-checkout-a-commit-in-project-history"},"here")," \ud83d\ude4f.")))}i.isMDXComponent=!0},3872:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294);const a=e=>{let{image:t,name:o,title:a,url:r}=e;return n.createElement("section",{className:"author_card"},n.createElement("div",null,n.createElement("span",null,n.createElement("a",{href:r,target:"_blank",alt:o},n.createElement("img",{src:t,alt:o}))),n.createElement("div",null,n.createElement("span",{className:"name"},n.createElement("a",{href:r,target:"_blank",alt:o},o)),n.createElement("span",{className:"title"},a),n.createElement("span",{className:"discord"},"Got questions? Find us on ",n.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},9635:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/fleek-network-node-health-check-guide-62de55535fb7fe8c3919da51154b1950.png"}}]);