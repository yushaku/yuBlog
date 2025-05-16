"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Node,
  Edge,
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeMouseHandler,
  EdgeMouseHandler,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { topics } from "@/utils/constants";
import { RoadMapNode } from "@/app/mocs/[slug]/components/RoadMapNode";
import { cn } from "@/utils";
import toast from "react-hot-toast";
import { ChevronDown, ChevronRight, X } from "lucide-react";

type TopicSlug = (typeof topics)[number]["slug"];

export interface RoadMapNodeData extends Record<string, unknown> {
  label: string;
  type?: string;
  link?: string;
  description?: string;
  className?: string;
  logo?: {
    src: string;
    width: number;
    height: number;
    className?: string;
  };
}

interface NewNodeForm {
  label: string;
  type?: string;
  link?: string;
  description?: string;
  className?: string;
  logo?: {
    src: string;
    width: number;
    height: number;
    className?: string;
  };
}

declare global {
  interface Window {
    handleDeleteNode?: (nodeId: string) => void;
  }
}

async function loadMOCData(name: string) {
  try {
    const [nodesResponse, edgesResponse] = await Promise.all([
      fetch(`/api/load-moc?name=${name}&type=nodes`),
      fetch(`/api/load-moc?name=${name}&type=edges`),
    ]);

    if (!nodesResponse.ok || !edgesResponse.ok) {
      throw new Error("Failed to load MOC data");
    }

    const nodes = await nodesResponse.json();
    const edges = await edgesResponse.json();

    return { nodes, edges };
  } catch (error) {
    console.error("Error loading MOC data:", error);
    return { nodes: [], edges: [] };
  }
}

export default function RoadmapAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedMoc, setSelectedMoc] = useState<TopicSlug>(topics[0].slug);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node<RoadMapNodeData>>(
    []
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState<
    Edge<Record<string, unknown>>
  >([]);
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [newNode, setNewNode] = useState<NewNodeForm>({
    label: "",
    link: "",
    description: "",
    className: "",
    logo: {
      src: "",
      width: 24,
      height: 24,
      className: "",
    },
  });

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/verify-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error("Invalid password");
      }

      setIsAuthenticated(true);
      toast.success("Welcome back!");
    } catch (error) {
      toast.error("Invalid password");
    }
  };

  const handleDeleteNode = useCallback(
    (nodeId: string) => {
      setNodes((nds) => nds.filter((n) => n.id !== nodeId));
      setEdges((eds) =>
        eds.filter((e) => e.source !== nodeId && e.target !== nodeId)
      );
      toast.success("Node removed");
    },
    [setNodes, setEdges]
  );

  useEffect(() => {
    window.handleDeleteNode = handleDeleteNode;
    return () => {
      window.handleDeleteNode = undefined;
    };
  }, [handleDeleteNode]);

  useEffect(() => {
    loadMOCData(selectedMoc).then(({ nodes, edges }) => {
      setNodes(nodes as Node<RoadMapNodeData>[]);
      setEdges(edges as Edge<Record<string, unknown>>[]);
    });
  }, [selectedMoc, setNodes, setEdges]);

  const handleAddNode = () => {
    if (!newNode.label.trim()) return;

    const lastNode = nodes[nodes.length - 1];
    const position = lastNode
      ? {
          x: lastNode.position.x + 200,
          y: lastNode.position.y + (nodes.length % 2 === 0 ? 100 : -100),
        }
      : { x: 100, y: 100 };

    const node: Node<RoadMapNodeData> = {
      id: newNode.label.toLowerCase().replace(/\s+/g, "-"),
      type: newNode.type || "roadmap",
      position,
      data: {
        label: newNode.label,
        type: newNode.type,
        link: newNode.link || undefined,
        description: newNode.description || undefined,
        className: newNode.className || undefined,
        logo: newNode.logo?.src ? newNode.logo : undefined,
      },
    };

    setNodes([...nodes, node]);
    setNewNode({
      label: "",
      type: "roadmap",
      link: "",
      description: "",
      className: "",
      logo: {
        src: "",
        width: 24,
        height: 24,
        className: "",
      },
    });
  };

  const handleRemoveNode = (nodeId: string) => {
    setNodes(nodes.filter((node) => node.id !== nodeId));
    setEdges(
      edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId)
    );
  };

  const onConnect = useCallback(
    (connection: any) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ roadmap: RoadMapNode }), []);

  const handleSave = async () => {
    try {
      const response = await fetch("/api/save-moc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: selectedMoc,
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      toast.success("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Failed to save data. Please try again.");
    }
  };

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      // Add a delete button to the node when clicked
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: {
                ...n.data,
                showDelete: true,
              },
            };
          }
          return {
            ...n,
            data: {
              ...n.data,
              showDelete: false,
            },
          };
        })
      );
    },
    [setNodes]
  );

  const onNodeMouseLeave: NodeMouseHandler = useCallback(
    (_, node) => {
      // Hide the delete button when mouse leaves the node
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: {
                ...n.data,
                showDelete: false,
              },
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );

  const onEdgeClick: EdgeMouseHandler = useCallback(
    (_, edge) => {
      // Remove the edge when clicked
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      toast.success("Edge removed");
    },
    [setEdges]
  );

  const onPaneClick = useCallback(() => {
    // Hide all delete buttons when clicking on the pane
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: {
          ...n.data,
          showDelete: false,
        },
      }))
    );
  }, [setNodes]);

  if (!isAuthenticated) {
    return (
      <div className='container mx-auto p-4 flex items-center justify-center min-h-screen'>
        <div className='w-full max-w-md space-y-4'>
          <h1 className='text-2xl font-bold text-center'>Admin Access</h1>
          <div className='space-y-2'>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter admin password'
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
            />
            <Button onClick={handleLogin} className='w-full'>
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold'>Roadmap Admin</h1>
        <Button
          variant='outline'
          onClick={() => {
            setIsAuthenticated(false);
            setPassword("");
          }}
        >
          Logout
        </Button>
      </div>

      <div className='mb-4'>
        <select
          id='moc-select'
          value={selectedMoc}
          onChange={(e) => {
            const newMoc = e.target.value as TopicSlug;
            setSelectedMoc(newMoc);
          }}
          className='w-full p-2 border rounded'
        >
          {topics.map((topic) => (
            <option key={topic.slug} value={topic.slug}>
              {topic.title}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>Label *</label>
            <Input
              id='node-label'
              value={newNode.label}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewNode({ ...newNode, label: e.target.value })
              }
              placeholder='Enter node label'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Link</label>
            <Input
              id='node-link'
              value={newNode.link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewNode({ ...newNode, link: e.target.value })
              }
              placeholder='Enter node link'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>
              Description
            </label>
            <Textarea
              id='node-description'
              value={newNode.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewNode({ ...newNode, description: e.target.value })
              }
              placeholder='Enter node description'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>CSS Class</label>
            <Input
              id='node-class'
              value={newNode.className}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewNode({ ...newNode, className: e.target.value })
              }
              placeholder='Enter CSS class'
            />
          </div>
          <div className='space-y-2'>
            <button
              type='button'
              onClick={() => setIsLogoExpanded(!isLogoExpanded)}
              className='flex items-center gap-2 text-sm font-medium hover:text-primary'
            >
              {isLogoExpanded ? (
                <ChevronDown className='h-4 w-4' />
              ) : (
                <ChevronRight className='h-4 w-4' />
              )}
              Logo
            </button>
            {isLogoExpanded && (
              <div className='pl-6 space-y-2 border-l-2 border-border'>
                <div className='grid grid-cols-2 gap-2'>
                  <Input
                    id='logo-src'
                    value={newNode.logo?.src}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewNode({
                        ...newNode,
                        logo: { ...newNode.logo!, src: e.target.value },
                      })
                    }
                    placeholder='Logo URL'
                  />
                  <Input
                    id='logo-class'
                    value={newNode.logo?.className}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewNode({
                        ...newNode,
                        logo: { ...newNode.logo!, className: e.target.value },
                      })
                    }
                    placeholder='Logo CSS class'
                  />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  <Input
                    type='number'
                    id='logo-width'
                    value={newNode.logo?.width}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewNode({
                        ...newNode,
                        logo: {
                          ...newNode.logo!,
                          width: parseInt(e.target.value),
                        },
                      })
                    }
                    placeholder='Logo width'
                  />
                  <Input
                    type='number'
                    id='logo-height'
                    value={newNode.logo?.height}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewNode({
                        ...newNode,
                        logo: {
                          ...newNode.logo!,
                          height: parseInt(e.target.value),
                        },
                      })
                    }
                    placeholder='Logo height'
                  />
                </div>
              </div>
            )}
          </div>
          <Button onClick={handleAddNode}>Add Node</Button>
        </div>
      </div>

      <div className={cn("h-[80dvh] w-full border rounded-lg mb-4")}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onNodeMouseLeave={onNodeMouseLeave}
          onEdgeClick={onEdgeClick}
          onPaneClick={onPaneClick}
          fitView
          attributionPosition='bottom-left'
        >
          <Background color='#333' gap={16} />
        </ReactFlow>
      </div>

      <Button onClick={handleSave} className='w-full'>
        Save Changes
      </Button>
    </div>
  );
}
