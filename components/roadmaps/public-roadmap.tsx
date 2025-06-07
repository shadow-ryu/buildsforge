"use client";

import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

interface TaskNode {
  id: string;
  data: { label: string; description?: string };
  position: { x: number; y: number };
  style?: React.CSSProperties;
  className?: string;
}

interface TaskEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

interface Day {
  dayIndex: number;
  dueDate: string;
  tasks: Task[];
}

interface TaskFlowProps {
  days: Day[];
}

export function RoadmapFlow({ days }: TaskFlowProps) {
  const nodesInit: TaskNode[] = [];
  const edgesInit: TaskEdge[] = [];

  const verticalSpacing = 180;
  const horizontalSpacing = 260;

  days.forEach((day, i) => {
    day.tasks.forEach((task, j) => {
      const nodeId = `${day.dayIndex}-${task.id}`;
      nodesInit.push({
        id: nodeId,
        data: {
          label: `${task.title}`,
          description: task.description,
        },
        position: {
          x: j * horizontalSpacing,
          y: i * verticalSpacing,
        },
        style: {
          padding: 10,
          borderRadius: 12,
          border: task.completed ? "2px solid #9333EA" : "1px solid #6B7280",
          background: task.completed ? "#1E1B4B" : "#111827",
          color: task.completed ? "#C4B5FD" : "#F3F4F6",
          fontWeight: 500,
        },
      });

      if (j > 0) {
        edgesInit.push({
          id: `e-${day.dayIndex}-${j - 1}-${j}`,
          source: `${day.dayIndex}-${day.tasks[j - 1].id}`,
          target: nodeId,
        });
      }
    });

    if (i > 0 && days[i - 1].tasks.length) {
      edgesInit.push({
        id: `e-day-${i - 1}-to-${i}`,
        source: `${days[i - 1].dayIndex}-${days[i - 1].tasks[0].id}`,
        target: `${day.dayIndex}-${day.tasks[0].id}`,
        label: `Day ${day.dayIndex}`,
      });
    }
  });

  const [nodes] = useNodesState(nodesInit);
  const [edges] = useEdgesState(edgesInit);

  return (
    <div className="w-full h-[80vh] rounded-xl border border-purple-700 bg-[#0F0F11]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={() => {}}
        onEdgesChange={() => {}}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        fitView
      >
        <Background gap={16} color="#2D2F36" />
        <MiniMap nodeColor={() => "#A78BFA"} zoomable pannable />
        {/* @ts-expect-error yeys */}
        <Controls position={Position.BottomRight} />
      </ReactFlow>
    </div>
  );
}
