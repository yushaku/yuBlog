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
  ],
  edges: [
    { id: "a1", source: "ethereum", target: "aa", animated: false },
    { id: "a2", source: "aa", target: "erc-4337", animated: false },
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
        logo: {
          src: "https://s2.coinmarketcap.com/static/img/coins/200x200/6719.png",
          width: 20,
          height: 20,
        },
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

const solidity = {
  nodes: [
    {
      id: "solidity",
      type: "roadmap",
      position: { x: 200, y: 400 },
      data: {
        label: "Solidity",
        type: "main",
        logo: {
          src: "https://svgmix.com/uploads/skillicons/f41159-solidity.svg",
          width: 20,
          height: 20,
        },
      },
    },
    {
      id: "storage-slots-primary-types",
      type: "roadmap",
      position: { x: 400, y: 400 },
      data: {
        label: "Storage Slots of Primary Types",
        link: "/article/solidity/storage_slots_primary_types",
      },
    },
    {
      id: "storage-slots-complex-types",
      type: "roadmap",
      position: { x: 400, y: 500 },
      data: {
        label: "Storage Slots of Complex Types",
        link: "/article/solidity/storage_slots_complex_types",
      },
    },
  ],
  edges: [
    {
      id: "s1",
      source: "ethereum",
      target: "solidity",
      animated: true,
    },
    {
      id: "s2",
      source: "solidity",
      target: "storage-slots-primary-types",
      animated: false,
    },
    {
      id: "s3",
      source: "solidity",
      target: "storage-slots-complex-types",
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
      position: { x: 0, y: 200 },
      data: {
        label: "Ethereum",
        type: "main",
        logo: {
          src: "https://www.cdnlogo.com/logos/e/81/ethereum-eth.svg",
          width: 20,
          height: 20,
        },
      },
    },
    ...aa.nodes,
    ...indexer.nodes,
    ...solidity.nodes,
  ],
  edges: [...aa.edges, ...indexer.edges, ...solidity.edges],
};
