import { MOC } from ".";

export const nodejs: MOC = {
  title: "Nodejs",
  nodes: [
    {
      id: "nodejs",
      type: "roadmap",
      position: { x: 0, y: 0 },
      data: { label: "nodejs", type: "main" },
    },
    {
      id: "intro",
      type: "roadmap",
      position: { x: 200, y: 0 },
      data: { label: "I placed it just for fun", type: "main" },
    },
    {
      id: "confession",
      type: "roadmap",
      position: { x: 200, y: 100 },
      data: { label: "I've not write anything on this topic", type: "main" },
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "nodejs",
      target: "intro",
    },
    {
      id: "e1-3",
      source: "nodejs",
      target: "confession",
    },
  ],
};
