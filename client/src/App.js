import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Lobby from "./Components/Lobby";
import EditorPage from "./Components/EditorPage";
import AddCodeBlock from "./pages/AddCodeBlock";
import SignIn from "./pages/SignIn";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [clientType, setClientType] = useState("");
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [wasEntered, setWasEntered] = useState(false);
  const [solution, setSolution] = useState("");
  const [sessionId, setSessionId] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn
                username={username}
                setUsername={setUsername}
                clientType={clientType}
                setClientType={setClientType}
              />
            }
          ></Route>
          <Route
            path="/Lobby"
            element={
              <Lobby
                username={username}
                clientType={clientType}
                title={title}
                setTitle={setTitle}
                code={code}
                setCode={setCode}
                wasEntered={wasEntered}
                setWasEntered={setWasEntered}
                solution={solution}
                setSolution={setSolution}
              />
            }
          ></Route>
          <Route
            path="/editor"
            element={
              <EditorPage
                username={username}
                clientType={clientType}
                title={title}
                setTitle={setTitle}
                code={code}
                setCode={setCode}
                wasEntered={wasEntered}
                setWasEntered={setWasEntered}
                solution={solution}
                setSolution={setSolution}
                sessionId={sessionId}
              />
            }
          ></Route>
          <Route path="/codeblock/new" element={<AddCodeBlock />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
