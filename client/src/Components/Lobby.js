import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lobby = ({ username, clientType }) => {
  const navigate = useNavigate();
  const [codeblocksArray, setCodeblocksArray] = useState([]);

  console.log("Enter Lobby", username, clientType);

  useEffect(() => {
    const getCodeBlocks = async () => {
      try {
        const res = await axios("http://localhost:8080/api/codeblocks/all");
        console.log(res);
        setCodeblocksArray(res.data);
      } catch (err) {}
    };
    getCodeBlocks();
  }, []);

  const onAddCodeBlock = () => {
    //navigate(`/codeblock/new`, { state: { username, clientType } });
  };

  async function onCodeBlockNameClick(item) {
    sessionId, { item });
    const sessionId = item._id;
    console.log(sessionId);
    await navigate(`/editor/:sessionId`, { state: { username, ite, sessionId } });
  }

  return (
    <div className="lobby-container">
      <h2>Choose code block</h2>
      <h5>Connected as {username}</h5>
      <div className="blocks-container">
        <ul className="code-block-names">
          {clientType === "Mentor" && (
            <li className="code-block" onClick={onAddCodeBlock()}>
              Add a new code block
            </li>
          )}
          {codeblocksArray.map((item) => {
            return (
              <li
                className="code-block"
                id={item._id}
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
