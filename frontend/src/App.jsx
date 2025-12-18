import React, { useState, useCallback } from 'react';
import ReactFlow, { 
  addEdge, 
  useNodesState, 
  useEdgesState,
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';

import TextNode from './nodes/TextNode';
import InputNode from './nodes/InputNode';
import MathNode from './nodes/MathNode';
import OutputNode from './nodes/OutputNode';
import BaseNode from './nodes/BaseNode';
import { submitPipeline } from './submit';
import './styles/nodes.css';
import './App.css';

const nodeTypes = {
  text: TextNode,
  input: InputNode,
  math: MathNode,
  output: OutputNode,
  base: BaseNode,
};

const initialNodes = [
  { id: '1', data: { label: 'Input Node' }, position: { x: 0, y: 0 }, type: 'input' },
  { id: '2', data: { label: 'Process' }, position: { x: 200, y: 0 }, type: 'base' },
  { id: '3', data: { label: 'Output' }, position: { x: 400, y: 0 }, type: 'output' },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const handleSubmit = () => {
    submitPipeline(nodes, edges);
  };

  return (
    <div className="app-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
      <button 
        onClick={handleSubmit}
        className="submit-button"
      >
        Submit Pipeline
      </button>
    </div>
  );
}
