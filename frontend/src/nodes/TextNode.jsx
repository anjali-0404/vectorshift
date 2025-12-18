
import { useState } from "react";
import BaseNode from "./BaseNode";

export default function TextNode() {
  const [text, setText] = useState("");

  const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
  const variables = [...text.matchAll(regex)].map(m => m[1]);

  return (
    <BaseNode title="Text Node" inputs={variables} outputs={["output"]}>
      <textarea
        value={text}
        placeholder="Type text with {{variables}}"
        onChange={(e) => {
          setText(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        style={{ width: "100%", resize: "none" }}
      />
    </BaseNode>
  );
}
