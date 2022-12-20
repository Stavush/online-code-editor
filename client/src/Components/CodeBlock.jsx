import React from "react";
import Editor from "./Editor";

const CodeBlock = (item) => {
  return (
    <div id="codeblock-container">
      <h3 id="title">{item.title}</h3>
      <Editor />
    </div>
  );
};

export default CodeBlock;
