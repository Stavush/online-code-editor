import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initSocket } from "../socket";
import CodeEditor from "./CodeEditor";
import "./Editor.css";
import ACTIONS from "../Actions";

const EditorPage = ({ username, item }) => {
  console.log("Editorpage item:", item);

  const socketRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      /*socketRef.current.emit(ACTIONS.JOIN, {
        sessionId,
        username: location.state?.username,
      });*/
    };
    init();
  }, []);

  const [code, setCode] = useState("");
  const [users, setUsers] = useState([
    { socketId: 1, username: "Stav" },
    { socketId: 2, username: "Yahel" },
  ]);

  return (
    <div id="editor-page">
      <h2>{item.title}</h2>
      <div className="editor-page-bottom">
        <div className="sidebar">
          <p>Connected</p>
          <ul className="connected-list">
            {users.map((user) => (
              <li className="connected-user"> {user.username}</li>
            ))}
          </ul>
        </div>
        <CodeEditor code={code} />
      </div>
    </div>
  );
};

export default EditorPage;
