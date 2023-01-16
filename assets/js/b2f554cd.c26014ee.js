"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"the-fleek-network","metadata":{"permalink":"/blog/the-fleek-network","source":"@site/blog/the-fleek-network.md","title":"The Fleek Network","description":"Introduction","date":"2023-01-09T19:37:07.000Z","formattedDate":"January 9, 2023","tags":[{"label":"fleek network","permalink":"/blog/tags/fleek-network"},{"label":"blog","permalink":"/blog/tags/blog"},{"label":"engineering","permalink":"/blog/tags/engineering"},{"label":"introduction","permalink":"/blog/tags/introduction"}],"readingTime":4.155,"hasTruncateMarker":true,"authors":[{"name":"Mahmoud A. Shehata","title":"Lead Engineer","url":"https://github.com/b0xtch","image_url":"https://github.com/b0xtch.png","imageURL":"https://github.com/b0xtch.png"}],"frontMatter":{"title":"The Fleek Network","slug":"the-fleek-network","authors":{"name":"Mahmoud A. Shehata","title":"Lead Engineer","url":"https://github.com/b0xtch","image_url":"https://github.com/b0xtch.png","imageURL":"https://github.com/b0xtch.png"},"tags":["fleek network","blog","engineering","introduction"]}},"content":"## Introduction\\n\\nFleek Network is a decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer. An alternative to traditional content delivery networks without a central authority that is reliable and censorship-resistant. Fleek Network relies on blockchain technology at its core, allowing governance \\nand token rewards as incentives for participation in serving the network.\\n\\n\x3c!--truncate--\x3e\\n\\n\ud83d\udca1 This content was originally posted in [hackmd.io](https://hackmd.io/5jExeM1yQ7Sm_ly-6cp0ng)\\n\\n## Motivation\\n\\nStorage based traffic makes up 80% of Fleek traffic, the other 20% is for our websites.\\n\\n![](./assets/pie-chart-storage-based-trafic.jpg?202301121721)\\n\\n> Globally, gaming traffic will be 6% of consumer Internet traffic in 2021, up from 2% in 2016...\\n>\\n> [Cisco Research](https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/Global_2021_Forecast_Highlights.pdf)\\n\\n> Globally, consumer Internet video traffic will be 81% of consumer Internet traffic in 2021, up from 72% in 2016.\\n>\\n> [Cisco Research](https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/Global_2021_Forecast_Highlights.pdf)\\n\\n## Whats next for Fleek?\\n\\nDecentralize our entire stack! Today we start with an important piece in our stack, the CDN.\\n\\n- Accelerate IPFS content retrieval\\n- Better UX for storage and hosting\\n- Become non-custodial\\n\\n---\\n\\n## Fleek Network\\n\\n- Decentralized\\n- Scale with demand\\n- Web3 content\\n- Interoperable\\n- Robustness\\n- P2P\\n\\n## Architecture\\n\\n- Content Routing\\n- GossipSub\\n- DHT\\n- Peer discovery\\n- DHT (Kademlia)\\n- Request/Response\\n- Bitswap/Graphsync\\n- Gateway \\n\\n![](./assets/fleek-network-architecture.jpg?202301121718)\\n\\n## P2P\\n\\n![](./assets/diagram-p2p.png?202301121718)\\n\\n- Libp2p based\\n- Trustless\\n- Censorship-resistant\\n- Resilient\\n- Gossiping Protocol\\n- Content addressable\\n\\n---\\n\\n## Content Routing\\n\\n- DHT based content routing\\n- Gossip based routing\\n    - Bitswap\\n    - Graphsync Req/Res\\n- Not permanent\\n    - Cache eviction\\n\\n## Peer Discovery\\n\\n- DHT (Kademlia)\\n- mDns\\n- Pruning and Grafting, passing lists of peers \\n- Relay Nodes for nodes behind firewalls\\n- Fleek Bootstrap nodes\\n- Act as the network orchestrators\\n- Gossip Only\\n- Peer exchange through our Fleek bootstrap nodes\\n\\n## Consensus\\n\\n![](./assets/fleek-network-consensus.png?202301121718)\\n\\n- Narwhal and Bullshark\\n    - Data availability is ensured using Narwhal\\n    - Bullshark over Tusk for ordering\\n\\n**Comparing Tusk vs Bullshark:**\\n\\n|          | Common round latency | Async round latency | Garbage collection | Fairness |\\n| -------- | -------- | -------- | -------- | -------- |\\n| Tusk     | 3     | E(7)     |  yes  | no |\\n| Bullshark     | 2     | E(6)     | yes    | during sync |\\n\\n\\nClick [here](../docs/whitepaper) to find more information about the Fleek Network consensus.\\n\\n> Decoupling data dissemination from metadata ordering is the key mechanism to allow scalable and high throughput consensus systems \\n> \\n> [Narwhal & Tusk](https://arxiv.org/pdf/2105.11827.pdf)\\n\\n\\n## Indexer\\n\\n![](./assets/fleek-network-indexer.png?202301121718)\\n\\n- Each cache node runs an index provider\\n- Index provider announces the content availability to indexer\\n- Indexer get the nodes (for Bitswap/GraphSync) that are holding the content\\n- Accelerates content routing and discovery\\n\\n## Gateway\\n- Cherry Picker\\n- Minimizes latency of requests\\n- Governance\\n    - Bootstrapping \\n    - Ledger of nodes\\n- Nodes setup\\n    - TLS\\n    - DNS\\n\\n![](./assets/fleek-network-gateway.png?202301121718)\\n\\n## Security\\n- Sybil\\n- Eclipse\\n- Spam\\n- Bootstrap\\n- Sybil/Eclipse\\n\\nUser story\\n---\\n\\n```gherkin=\\nFeature: Accelerate Content\\n  As an app\\n  I want to put content onto the Ursa CDN\\n  Because I want to accelerate my content worldwide\\n  Given a trustless, censorship resistent premise\\n\\n  Scenario: App puts content to Ursa\\n    Given I\'m a signed up to ursa and have an endpoint id\\n    When I use the given api\\n    And I make a put request with my content\\n    Then the content should be uploaded to the network\\n    And distributed amongst peers and cached on the network and gateway\\n    And the nodes will also cache the data locally until storage threshold\\n```\\n\\n```gherkin=\\nFeature: Get Content\\n  As an app\\n  I want to get my content from Ursa CDN\\n  Because I want to serve it to my clients\\n\\n  Scenario: App requests for `/:cid`\\n    Given the App has a valid endpoint url\\n    When the App makes a `Get` request for the `cid`\\n    Then the Gateway returns the data if it is cached\\n    But if not cached, it will query the closest node\\n    And if cache miss, gateways\\n    And nodes will cache the content for repeated requests\\n    \\n```\\n\\nUser flows\\n---\\n\\n```sequence\\nClient->Gateway: Get: \\"/<client_endpoint>/:cid\\"\\n\\nGateway->Cherry Picker: Pick closest node\\n\\nCherry Picker->Node: Get content\\nNote right of Node: From cache or content routing\\n\\nNode--\x3eClient: Returns content and caches it\\n\\nNote left of Client: Incrementally verifies the data\\n```\\n\\n![](./assets/fleek-network-user-flows.png?202301121720)\\n\\n\\nProject Timeline\\n---\\n```mermaid\\ngantt\\n    title Mission no.1: First Exploration\\n\\n    section Network\\n    Outline and build v0 of node spec           :a1, 2022-06-01, 30d\\n    Develop networking stack     :after a1  , 25d\\n    \\n    section RPC\\n    Design Cache Node RPC interface      :2022-06-01  , 28d\\n    Integrate with gateways      :20d\\n    \\n    section Store\\n    Implement an IPLD blockstore      :2022-06-01  , 20d\\n    \\n    section Metrics\\n    Determine the metrics capturing mechanism      :2022-06-01  , 30d\\n    Determine payout for nodes serving content     : 30d\\n    \\n    section Daemon\\n    Build a local cli to interact with node      :2022-06-01  , 30d\\n    \\n    section Gateway\\n    Create a global gateway     :2022-06-01  , 24d\\n    Build a governance layer and cherry picker      : after a1  , 30d\\n```\\n\\n## Appendix\\n\\n:::info\\n**More coming soon!**\\n**This is a general overiew, paper, repo, and official announcement soon**\\n:::"}]}')}}]);