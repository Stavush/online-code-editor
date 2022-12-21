import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import WelcomImage from "../coding-img.png";

const SignIn = ({ username, setUsername, clientType, setClientType }) => {
  const navigate = useNavigate();

  const signIn = () => {
    console.log(username, clientType);
    if (username !== "" && clientType !== "") {
      console.log("Signed in successfully");
    }
    navigate(`/Lobby`, { state: { username, clientType } });
  };

  return (
    <div className="signin-container">
      <h1>Hi, welcome to on-line coding</h1>
      <img alt="welcome-img" src={WelcomImage} />
      <Form className="enter-form">
        <Form.Control
          placeholder="Your Name"
          id="name-input"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Form.Select
          id="type-input"
          aria-label="Default select example"
          onChange={(e) => setClientType(e.target.value)}
        >
          <option>I'm the...</option>
          <option value="Mentor">Mentor</option>
          <option value="Student">Student</option>
        </Form.Select>
        <Button type="submit" onClick={signIn}>
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
