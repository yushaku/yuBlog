export const mapOfContentData = {
  reactjs: {
    title: "reactjs",
    nodes: [
      {
        id: "frontend",
        type: "roadmap",
        position: { x: 400, y: 100 },
        data: { label: "Front-end", type: "main" },
      },
      {
        id: "html",
        type: "roadmap",
        position: { x: 200, y: 200 },
        data: { label: "HTML", type: "main" },
      },
      {
        id: "css",
        type: "roadmap",
        position: { x: 400, y: 200 },
        data: { label: "CSS", type: "main" },
      },
      {
        id: "javascript",
        type: "roadmap",
        position: { x: 600, y: 200 },
        data: { label: "JavaScript", type: "main" },
      },
      {
        id: "basics",
        type: "roadmap",
        position: { x: 100, y: 300 },
        data: { label: "Learn the basics", type: "sub" },
      },
      {
        id: "semantic",
        type: "roadmap",
        position: { x: 300, y: 300 },
        data: { label: "Writing Semantic HTML", type: "sub" },
      },
      {
        id: "cssBasics",
        type: "roadmap",
        position: { x: 400, y: 300 },
        data: { label: "Learn the basics", type: "sub" },
      },
      {
        id: "layouts",
        type: "roadmap",
        position: { x: 500, y: 300 },
        data: { label: "Making Layouts", type: "sub" },
      },
    ],
    edges: [
      { id: "e1", source: "frontend", target: "html", animated: true },
      { id: "e2", source: "frontend", target: "css", animated: true },
      { id: "e3", source: "frontend", target: "javascript", animated: true },
      { id: "e4", source: "html", target: "basics", animated: true },
      { id: "e5", source: "html", target: "semantic", animated: true },
      { id: "e6", source: "css", target: "cssBasics", animated: true },
      { id: "e7", source: "css", target: "layouts", animated: true },
    ],
  },
};
