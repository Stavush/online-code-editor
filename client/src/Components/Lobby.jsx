import React from "react";

const Lobby = (props) => {
  const onCodeBlockNameClick = (title) => {
    console.log(`Code Block ${title} Clicked`);
  };
  return (
    <div id="lobby-container">
      <h1>Choose code block</h1>
      <div id="blocks-container">
        <ul id="block-code-names">
          <li onClick={onCodeBlockNameClick("Item #1")}> Item #1 </li>
          <li onClick={onCodeBlockNameClick("Item #2")}> Item #2</li>
          <li onClick={onCodeBlockNameClick("Item #3")}> Item #3 </li>
          <li onClick={onCodeBlockNameClick("Item #4")}> Item #4</li>
          <li onClick={onCodeBlockNameClick("Item #5")}> Item #5 </li>
          <li onClick={onCodeBlockNameClick("Item #6")}> Item #6</li>
        </ul>
      </div>
    </div>
  );
};

export default Lobby;
