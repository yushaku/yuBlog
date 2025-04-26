import {
  IconEth,
  IconNodejs,
  IconReact,
  IconTypescript,
} from "@/components/Icons";

export const topItems = [
  {
    title: "Contact",
    href: "/contract",
  },
  {
    title: "About me",
    href: "about",
  },
];

export const topics = [
  {
    title: "Typescript",
    description:
      "Typescript is a superset of JavaScript that adds optional static typing to the language.",
    logo: IconTypescript,
  },
  {
    title: "ReactJS",
    description:
      "A JavaScript library for building user interfaces with reusable components and efficient DOM updates.",
    logo: IconReact,
  },
  {
    title: "Nodejs",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    logo: IconNodejs,
  },
  {
    title: "Ethereum",
    description:
      "A decentralized blockchain platform that enables smart contracts and decentralized applications (DApps).",
    logo: IconEth,
  },
];
