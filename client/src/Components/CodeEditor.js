import React, { useEffect, useState } from "react";
import "./Editor.css";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  let solution = 'console.log("Hello!")';
  const [code, setCode] = useState("");

  /*useEffect(() => {
    const init = async () => {
      return (
        
      );
    };
  }, []);*/

  const handleEditorChange = async (newCode) => {
    await setCode(newCode);
    console.log({ newCode });
    console.log({ code });
    await checkCode();
  };

  const checkCode = () => {
    if (code !== "" && code === solution) {
      console.log("You did it!!");
    }
  };

  return (
    <div id="editor-container">
      <Editor
        className="editor"
        height="75vh"
        width="80vh"
        defaultLanguage="javascript"
        value={code}
        placeholder="// Your code goes here"
        theme="vs-dark"
        onChange={handleEditorChange}
        editorDidMount={""}
      />
    </div>
  );
};

export default CodeEditor;
