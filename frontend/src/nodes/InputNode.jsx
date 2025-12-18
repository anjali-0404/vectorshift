
import BaseNode from "./BaseNode";

export default function InputNode() {
  return (
    <BaseNode title="Input" outputs={["value"]}>
      <p>Pipeline input</p>
    </BaseNode>
  );
}
