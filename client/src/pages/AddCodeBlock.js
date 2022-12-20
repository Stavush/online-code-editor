import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CodeEditor from "../Components/CodeEditor";
import "./AddCodeBlock.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCodeBlock = ({ username, clientType }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [wasEntered, setWasEntered] = useState(false);
  const [solution, setSolution] = useState("");

  const onCodeBlockSubmit = async () => {
    console.log({ code });
    try {
      const res = await axios.post("http://localhost:8080/api/codeblocks/new", {
        title: title,
        code: code,
        wasEntered: wasEntered,
        solution: solution,
      });
      console.log(res);
      console.log("New code block added");
      navigate(`/Lobby`, { state: { username, clientType } });
    } catch (err) {}
  };

  return (
    <div className="add-code-block-container">
      <h3>Please enter the details for the code block</h3>
      <Form className="add-code-block-form">
        <Form.Label>Code block title</Form.Label>
        <Form.Control
          placeholder="Title"
          id="add-title-input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Label>The code </Form.Label>
        <CodeEditor
          id="code-input"
          onChange={(e) => setCode(e.target.value.value)}
          value={code}
        />
        <Form.Label>The solution</Form.Label>
        <CodeEditor
          id="solution-input"
          onChange={(e) => setSolution(e.target.value.value)}
          value={code}
        />
        <Button type="submit" onClick={() => onCodeBlockSubmit()}>
          Add code block
        </Button>
      </Form>
    </div>
  );
};

export default AddCodeBlock;
