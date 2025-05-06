export const systemDesign = {
  title: "System Design",
  nodes: [
    {
      id: "system-design",
      type: "roadmap",
      position: { x: 0, y: 0 },
      data: { label: "System Design", type: "main" },
    },
    {
      id: "basics",
      type: "roadmap",
      position: { x: 200, y: 0 },
      data: { label: "Basics", type: "sub" },
    },
    {
      id: "databases",
      type: "roadmap",
      position: { x: 200, y: 100 },
      data: { label: "Databases", type: "sub" },
    },
    {
      id: "caching",
      type: "roadmap",
      position: { x: 200, y: 200 },
      data: { label: "Caching", type: "sub", link: "/blog/caching" },
    },
  ],
  edges: [
    { id: "e1", source: "system-design", target: "basics", animated: true },
    { id: "e2", source: "system-design", target: "databases", animated: true },
    { id: "e3", source: "system-design", target: "caching", animated: true },
    {
      id: "e4",
      source: "system-design",
      target: "load-balancing",
      animated: true,
    },
    {
      id: "e5",
      source: "system-design",
      target: "scalability",
      animated: true,
    },
    {
      id: "e6",
      source: "system-design",
      target: "microservices",
      animated: true,
    },
    { id: "e7", source: "system-design", target: "security", animated: true },
    { id: "e8", source: "system-design", target: "monitoring", animated: true },
    {
      id: "e9",
      source: "system-design",
      target: "design-patterns",
      animated: true,
    },
    {
      id: "e10",
      source: "system-design",
      target: "case-studies",
      animated: true,
    },
    {
      id: "e11",
      source: "system-design",
      target: "best-practices",
      animated: true,
    },
    { id: "e12", source: "system-design", target: "resources", animated: true },
  ],
};
