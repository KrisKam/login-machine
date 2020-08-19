import React from "react";
import "./App.css";
import { useMachine } from "@xstate/react";
import loginMachine from "./machine";

function App() {
  return (
    <div className="App">
      <header className="App-header">X-State Practice: Login</header>
    </div>
  );
}

export default App;
