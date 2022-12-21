import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initSocket } from "../socket";
import CodeEditor from "./CodeEditor";
import "./Editor.css";
import ACTIONS from "../Actions";
import { io } from "socket.io-client";

const EditorPage = (props) => {
  //console.log("code from editor page:", code);
  console.log({ props });
  const socketRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let sessionId = props.sessionId;
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.emit(ACTIONS.JOIN, {
        sessionId,
        username: location.state?.username,
      });
    };
    init();
  }, []);

  const [users, setUsers] = useState([
    { socketId: 1, username: "Stav" },
    { socketId: 2, username: "Shir" },
  ]);

  return (
    <div id="editor-page">
      <h2>{props.title}</h2>
      <div className="editor-page-bottom">
        <div className="sidebar">
          <p>Connected</p>
          <ul className="connected-list">
            {users.map((user) => (
              <li className="connected-user"> {user.username}</li>
            ))}
          </ul>
        </div>
        <CodeEditor value={props.code} />
      </div>
    </div>
  );
};

export default EditorPage;
