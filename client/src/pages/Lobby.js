import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendClient } from "../clients";

const Lobby = ({
  username,
  clientType,
  title,
  setTitle,
  code,
  setCode,
  wasEntered,
  setWasEntered,
  solution,
  setSolution,
  sessionId,
  setSessionId,
}) => {
  const navigate = useNavigate();
  const [codeblocksArray, setCodeblocksArray] = useState([]);

  useEffect(() => {
    const getCodeBlocks = async () => {
      try {
        const res = await backendClient.get("/codeblocks/all");
        setCodeblocksArray(res.data);
      } catch (err) {}
    };
    getCodeBlocks();
  }, []);

  async function onAddCodeBlock() {
    await navigate("/codeblocks/new", { state: { username, clientType } });
  }

  async function onCodeBlockNameClick(item) {
    await setSessionId(item._id);
    await setTitle(item.title);
    await setCode(item.code);
    await setWasEntered(item.wasEntered);
    await setSolution(item.solution);

    await navigate("/editor/:sessionId", {
      username,
      clientType,
      title,
      code,
      wasEntered,
      solution,
      sessionId,
    });
  }

  return (
    <div className="lobby-container">
      <h2>Choose code block</h2>
      <h5>Connected as {username}</h5>
      <div className="blocks-container">
        <ul className="code-block-names">
          {clientType === "Mentor" && (
            <li
              className="code-block-add-btn"
              id="add-btn"
              onClick={() => onAddCodeBlock()}
            >
              Add a new code block
            </li>
          )}
          {codeblocksArray.map((item) => {
            return (
              <li
                className="code-block"
                key={item.title.split(" ").join("-")}
                onClick={() => onCodeBlockNameClick(item)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Lobby;
