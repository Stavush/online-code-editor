import React, { useState } from "react";
import "./Editor.css";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ onChange, code }) => {
  const [value, setValue] = useState(code || "");
  const handleEditorChange = (newCode) => {
    setValue(newCode);
    console.log(typeof newCode);
    console.log({ newCode });
    //onChange("code", value);
  };

  return (
    <div id="editor-page">
      <h3>#Title</h3>
      <Editor
        height="85vh"
        defaultLanguage="javascript"
        value={value}
        defaultValue="// Your code goes here"
        theme="vs-dark"
        onChange={handleEditorChange}
        editorDidMount={""}
      />
    </div>
  );
};

export default CodeEditor;
