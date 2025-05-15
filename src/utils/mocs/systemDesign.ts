export const systemDesign = {
  title: "System Design",
  nodes: [
    {
      id: "system-design",
      type: "roadmap",
      position: { x: 0, y: 200 },
      data: {
        label: "System Design",
      },
    },
    {
      id: "basics",
      type: "roadmap",
      position: { x: 200, y: 0 },
      data: {
        label: "Building Blocks",
        type: "sub",
        description: "Core components of large-scale systems",
        className: "max-w-[160px]",
      },
    },
    {
      id: "Rate limit",
      type: "roadmap",
      position: { x: 400, y: 0 },
      data: {
        label: "Rate limit",
        link: "/article/system_design/rate_limit",
        logo: {
          src: "https://cdn2.iconfinder.com/data/icons/microservices-soft-fill/60/Rate-Limiting-rate-limiting-server-filter-512.png",
          width: 30,
          height: 30,
        },
      },
    },
    {
      id: "Load balancer",
      type: "roadmap",
      position: { x: 400, y: 100 },
      data: {
        label: "Load balancer",
        link: "/article/system_design/load_balancer",
        logo: {
          src: "https://cdn-icons-png.flaticon.com/512/17215/17215942.png",
          width: 30,
          height: 30,
        },
      },
    },
    {
      id: "databases",
      type: "roadmap",
      position: { x: 200, y: 600 },
      data: {
        label: "Databases",
      },
    },
    {
      id: "caching",
      type: "roadmap",
      position: { x: 200, y: 200 },
      data: {
        label: "Caching",
        link: "/article/system_design/caching",
      },
    },
    {
      id: "redis",
      type: "roadmap",
      position: { x: 400, y: 200 },
      data: {
        label: "redis",
        link: "/article/system_design/redis",
        logo: {
          src: "https://www.cdnlogo.com/logos/r/3/redis.svg",
          width: 30,
          height: 30,
        },
      },
    },
    {
      id: "cache-strategies",
      type: "roadmap",
      position: { x: 400, y: 300 },
      data: {
        label: "cache-strategies",
        link: "/article/system_design/cache-strategies",
      },
    },
    {
      id: "architectural-patterns",
      type: "roadmap",
      position: { x: 200, y: 400 },
      data: {
        label: "architectural-patterns",
      },
    },
    {
      id: "monolithic-architecture",
      type: "roadmap",
      position: { x: 500, y: 400 },
      data: {
        label: "Monolithic Architecture",
        link: "/article/system_design/monolithic-architecture",
      },
    },
    {
      id: "microservices-architecture",
      type: "roadmap",
      position: { x: 500, y: 500 },
      data: {
        label: "Microservices Architecture",
        link: "/article/system_design/microservices-architecture",
      },
    },
  ],
  edges: [
    { id: "e1", source: "system-design", target: "basics", animated: false },
    {
      id: "e2",
      source: "basics",
      target: "Rate limit",
      animated: false,
    },
    {
      id: "e3",
      source: "basics",
      target: "Load balancer",
      animated: false,
    },
    { id: "e4", source: "system-design", target: "databases", animated: false },
    { id: "e5", source: "system-design", target: "caching", animated: false },
    {
      id: "e6",
      source: "caching",
      target: "cache-strategies",
      animated: false,
    },
    {
      id: "e7",
      source: "caching",
      target: "redis",
      animated: false,
    },
    {
      id: "e8",
      source: "system-design",
      target: "architectural-patterns",
      animated: false,
    },
    {
      id: "e9",
      source: "architectural-patterns",
      target: "microservices-architecture",
      animated: false,
    },
    {
      id: "e10",
      source: "architectural-patterns",
      target: "monolithic-architecture",
      animated: false,
    },
  ],
};
