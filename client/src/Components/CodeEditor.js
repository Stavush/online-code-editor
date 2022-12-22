import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = (value) => {
  const [code, setCode] = useState(value.value);
  //const [solution, setSolution] = useState("");

  useEffect(() => {
    const init = async () => {};
    init();
  }, []);

  const handleEditorChange = async (newCode) => {
    await setCode(newCode);
    await console.log({ code });
    //await checkCode();
  };

  /*const checkCode = () => {
    if (code !== "" && code === solution) {
      console.log("You did it!!");
    }
  };*/

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
