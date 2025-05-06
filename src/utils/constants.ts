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

export const projectList = [
  {
    title: "Yu DEX",
    imageLink: "/dex1.png",
    description:
      "All in one marketplace for trading crypto, with a decentralized exchange. Built on top of the BSC blockchain. Users can trade crypto on the BSC network and receive crypto in their wallets. And NFts made easy with the use of the NFT Marketplace.",
    tools: ["React", "BSC blockchain", "DEX", "Wagmi", "Token"],
    linkPage: "https://yushaku-dex.vercel.app/",
  },
  {
    title: "Yu AI",
    imageLink: "/ai.png",
    description:
      "Experience the future of data interaction with our AI app. Powered by OpenAI and advanced vector database technology, users can effortlessly upload files and ask natural language questions. Whether it's extracting insights from documents or analyzing images, our app makes data analysis intuitive and efficient. Revolutionize your workflow with seamless AI integration",
    tools: ["NextJs", "Vercel", "OpenAI", "Vector Database", "OAuth"],
    githubLink: "https://github.com/yushaku/ai-assistant",
  },
  {
    title: "developer's blog",
    imageLink:
      "https://user-images.githubusercontent.com/72312124/199775184-02c78337-f0cf-4786-8227-43cd58982536.png",
    description:
      "My goal with this blog is to create helpful content for full-stack web developers, and my newsletter is no different! I'll let you know when I publish new content, and I'll even share exclusive newsletter-only content now and then. ",
    tools: ["NextJs", "Vercel", "Notion", "GraphGl"],
    githubLink: "https://github.com/yushaku/yuBlog",
  },
  {
    title: "Pomodoro focus app",
    imageLink:
      "https://user-images.githubusercontent.com/72312124/200182685-3a0595f1-c949-49f1-964b-9735f2f3c69f.png",
    description:
      "The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.",
    tools: ["html", "css", "javascript", "github"],
    linkPage: "https://yushaku.github.io/pomodoro/",
  },
  {
    title: "yushaku theme",
    imageLink:
      "https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png",
    description:
      "Halcyon Theme, A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tools: ["vscode", "css", "design", "theme"],
    linkPage:
      "https://marketplace.visualstudio.com/items?itemName=yushaku.yushaku-dark-theme",
  },
];
