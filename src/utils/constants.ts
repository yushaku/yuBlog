import {
  IconEth,
  IconNodejs,
  IconReact,
  IconTypescript,
} from "@/components/Icons";

export const topItems = [
  {
    title: "Articles",
    href: "/",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "About me",
    href: "about",
  },
];

export const topics = [
  {
    title: "Typescript",
    slug: "typescript",
    description:
      "Typescript is a superset of JavaScript that adds optional static typing to the language.",
    logo: IconTypescript,
  },
  {
    title: "ReactJS",
    slug: "reactjs",
    description:
      "A JavaScript library for building user interfaces with reusable components and efficient DOM updates.",
    logo: IconReact,
  },
  {
    title: "Nodejs",
    slug: "nodejs",
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
    logo: IconNodejs,
  },
  {
    title: "Ethereum",
    slug: "ethereum",
    description:
      "A decentralized blockchain platform that enables decentralized applications.",
    logo: IconEth,
  },
  // {
  //   title: "System Design",
  //   slug: "system-design",
  //   description:
  //     "System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.",
  //   logo: IconNodejs,
  // },
];
