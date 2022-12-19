import React from "react";
import Editor from "./Editor";

const CodeBlock = (title) => {
  return (
    <div id="codeblock-container">
      <h3 id="title">{title}</h3>
      <Editor />
    </div>
  );
};

export default CodeBlock;
