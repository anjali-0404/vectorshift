
import { Handle, Position } from "reactflow";

export default function BaseNode({ title, inputs = [], outputs = [], children }) {
  return (
    <div className="node-container">
      <div className="node-title">{title}</div>

      {inputs.map((id, i) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 50 + i * 20 }}
        />
      ))}

      <div className="node-content">{children}</div>

      {outputs.map((id, i) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 50 + i * 20 }}
        />
      ))}
    </div>
  );
}
