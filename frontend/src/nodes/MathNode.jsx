
import BaseNode from "./BaseNode";

export default function MathNode() {
  return (
    <BaseNode title="Math Node" inputs={["a", "b"]} outputs={["result"]}>
      <p>Add / Multiply values</p>
    </BaseNode>
  );
}
