import "./App.css";
import Lobby from "./Components/Lobby";
import Editor from "./Components/Editor";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function App() {
  //const [isMentor, setIsMentor] = useState(true);
  return (
    <div className="App">
      <h1>Hi, welcome to on-line coding</h1>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Your Name" />
          </Col>
          <Col>
            <Form.Select aria-label="Default select example">
              <option>I'm the...</option>
              <option value="Mentor">Mentor</option>
              <option value="Student">Student</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Button type="submit">Button</Button>
        </Row>
      </Form>

      <Lobby />

      <Editor />
    </div>
  );
}

export default App;
