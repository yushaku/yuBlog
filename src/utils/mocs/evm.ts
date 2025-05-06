import { MOC } from ".";

const aa = {
  nodes: [
    {
      id: "aa",
      type: "roadmap",
      position: { x: 200, y: 0 },
      data: {
        label: "Account Abstraction",
        link: "/article/blockchain/AA_breakdown",
      },
    },
    {
      id: "erc-4337",
      type: "roadmap",
      position: { x: 450, y: 0 },
      data: {
        label: "Erc-4337",
        link: "/article/blockchain/ERC-4337",
      },
    },
    {
      id: "eip-7702",
      type: "roadmap",
      position: { x: 450, y: 100 },
      data: {
        label: "EIP-7702",
        link: "/article/blockchain/eip-7702",
      },
    },
  ],
  edges: [
    { id: "a1", source: "ethereum", target: "aa", animated: false },
    { id: "a2", source: "aa", target: "erc-4337", animated: false },
    { id: "a3", source: "aa", target: "eip-7702", animated: false },
  ],
};

const indexer = {
  nodes: [
    {
      id: "indexer",
      type: "roadmap",
      position: { x: 200, y: 200 },
      data: {
        label: "Indexer",
        type: "main",
      },
    },
    {
      id: "the-graph",
      type: "roadmap",
      position: { x: 400, y: 200 },
      data: {
        label: "The Graph",
        type: "main",
      },
    },
  ],
  edges: [
    {
      id: "i1",
      source: "ethereum",
      target: "indexer",
      animated: false,
    },
    {
      id: "i2",
      source: "indexer",
      target: "the-graph",
      animated: false,
    },
  ],
};

export const ethereum: MOC = {
  title: "ethereum",
  nodes: [
    {
      id: "ethereum",
      type: "roadmap",
      position: { x: 0, y: 0 },
      data: {
        label: "Ethereum",
        type: "main",
        image: {
          src: "https://www.cdnlogo.com/logos/e/81/ethereum-eth.svg",
          width: 20,
          height: 20,
        },
      },
    },
    ...aa.nodes,
    ...indexer.nodes,
  ],
  edges: [...aa.edges, ...indexer.edges],
};
