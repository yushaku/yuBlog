"use client";

import { useState } from "react";
import { AdminRoadMap } from "../components/AdminRoadMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Node, Edge } from "@xyflow/react";
import { mapOfContentData, MOC } from "@/utils/mocs";
import { useRouter } from "next/navigation";

type MOCKey = keyof typeof mapOfContentData;

export default function RoadmapAdminPage() {
  const router = useRouter();
  const [selectedMoc, setSelectedMoc] = useState<MOCKey>(
    Object.keys(mapOfContentData)[0] as MOCKey
  );
  const [nodes, setNodes] = useState<Node[]>(
    mapOfContentData[selectedMoc].nodes
  );
  const [edges, setEdges] = useState<Edge[]>(
    mapOfContentData[selectedMoc].edges
  );
  const [newNodeLabel, setNewNodeLabel] = useState("");
  const [newNodeLink, setNewNodeLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleAddNode = () => {
    if (!newNodeLabel) return;

    const newNode: Node = {
      id: newNodeLabel.toLowerCase().replace(/\s+/g, "-"),
      type: "roadmap",
      position: { x: 100, y: 100 },
      data: {
        label: newNodeLabel,
        link: newNodeLink || undefined,
      },
    };

    setNodes([...nodes, newNode]);
    setNewNodeLabel("");
    setNewNodeLink("");
  };

  const handleRemoveNode = (nodeId: string) => {
    setNodes(nodes.filter((node) => node.id !== nodeId));
    setEdges(
      edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId)
    );
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const response = await fetch("/api/mocs/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mocKey: selectedMoc,
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      router.refresh();
    } catch (error) {
      console.error("Error saving changes:", error);
      // TODO: Show error toast
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Roadmap Admin</h1>

      <div className='mb-4'>
        <Label htmlFor='moc-select'>Select Map of Content</Label>
        <select
          id='moc-select'
          value={selectedMoc}
          onChange={(e) => {
            const newMoc = e.target.value as MOCKey;
            setSelectedMoc(newMoc);
            setNodes(mapOfContentData[newMoc].nodes);
            setEdges(mapOfContentData[newMoc].edges);
          }}
          className='w-full p-2 border rounded'
        >
          {Object.keys(mapOfContentData).map((moc) => (
            <option key={moc} value={moc}>
              {moc}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div className='space-y-4'>
          <div>
            <Label htmlFor='node-label'>New Node Label</Label>
            <Input
              id='node-label'
              value={newNodeLabel}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewNodeLabel(e.target.value)
              }
              placeholder='Enter node label'
            />
          </div>
          <div>
            <Label htmlFor='node-link'>Node Link (optional)</Label>
            <Input
              id='node-link'
              value={newNodeLink}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewNodeLink(e.target.value)
              }
              placeholder='Enter node link'
            />
          </div>
          <Button onClick={handleAddNode}>Add Node</Button>
        </div>

        <div>
          <h2 className='text-lg font-semibold mb-2'>Existing Nodes</h2>
          <div className='space-y-2'>
            {nodes.map((node) => (
              <div
                key={node.id}
                className='flex items-center justify-between p-2 border rounded'
              >
                <span>{node.data.label}</span>
                <Button
                  variant='destructive'
                  size='sm'
                  onClick={() => handleRemoveNode(node.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='h-[600px] border rounded-lg mb-4'>
        <AdminRoadMap
          initialNodes={nodes}
          initialEdges={edges}
          className='h-full'
          onNodesUpdate={setNodes}
          onEdgesUpdate={setEdges}
        />
      </div>

      <Button onClick={handleSave} className='w-full' disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
}
