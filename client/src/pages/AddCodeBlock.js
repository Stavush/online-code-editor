import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CodeEditor from "../Components/CodeEditor";
import "./AddCodeBlock.css";
import { useNavigate } from "react-router-dom";

const AddCodeBlock = ({ username, clientType }) => {
  const navigate = useNavigate();

  const onCodeBlockSubmit = () => {
    console.log("New code block added");
    const sessionId = "1";
    navigate(`/editor/:sessionId`, { state: { username } });
  };

  return (
    <div className="add-code-block-container">
      <h3>Please enter the details for the code block</h3>
      <Form className="add-code-block-form">
        <Form.Label>Code block title</Form.Label>
        <Form.Control placeholder="Title" />
        <Form.Label>The code </Form.Label>
        <CodeEditor id="code" />
        <Form.Label>The solution</Form.Label>
        <CodeEditor id="solution" />
        <Button type="submit" onClick={onCodeBlockSubmit}>
          Add code block
        </Button>
      </Form>
    </div>
  );
};

export default AddCodeBlock;
