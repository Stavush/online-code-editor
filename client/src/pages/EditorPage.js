import React, { useEffect, useState, useRef } from "react";
import { initSocket } from "../socket";
import CodeEditor from "../Components/CodeEditor";
import ACTIONS from "../Actions";

const EditorPage = ({
  username,
  clientType,
  title,
  code,
  wasEntered,
  solution,
  sessionId,
}) => {
  const socketRef = useRef(null);

  const [users, setUsers] = useState([
    { socketId: 1, name: "Stav", clientType: "Mentor" },
    { socketId: 2, name: "Shir", clientType: "Student" },
  ]);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      const handleErrors = (e) => {
        console.log("Socket error", e);
      };
      socketRef.current.emit(ACTIONS.JOIN, {
        sessionId,
        username,
      });
    };
    init();
  }, []);

  const onLeaveSession = () => {
    console.log("Successfuly logged out");
  };

  return (
    <div id="editor-page">
      <h2>{title}</h2>
      <div className="editor-page-bottom">
        <div className="sidebar">
          <button className="leave-btn" onClick={() => onLeaveSession()}>
            Leave session
          </button>
          <p>Connected</p>
          <ul className="connected-list">
            {users.map((user) => (
              <li className="connected-user" key={user.name}>
                {user.name}
                {/*user.clientType === "Mentor" ? (
                  <div className="mentor-badge">read only</div>
                ) : (
                  <div className="student-badge">read & write</div>
                )*/}
              </li>
            ))}
          </ul>
        </div>
        <CodeEditor value={code} />
      </div>
    </div>
  );
};

export default EditorPage;
