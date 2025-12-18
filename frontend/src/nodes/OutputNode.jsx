
import BaseNode from "./BaseNode";

export default function OutputNode() {
  return (
    <BaseNode title="Output" inputs={["value"]}>
      <p>Pipeline output</p>
    </BaseNode>
  );
}
