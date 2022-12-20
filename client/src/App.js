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
//import io from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");
  const [clientType, setClientType] = useState("");

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
            element={<Lobby username={username} clientType={clientType} />}
          ></Route>
          <Route path="/editor/:sessionId" element={<EditorPage />}></Route>
          <Route path="/codeblock/new" element={<AddCodeBlock />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
