import React, {ChangeEvent} from "react";
import "./App.css";
import { useMachine } from "@xstate/react";
import loginMachine from "./machine";

function App() {
  const [current, send] = useMachine(loginMachine);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if (name === 'username') {
      send('')
    }
    if (name === 'password') {
      send('')
    }
  }

  return (
    <div className="App">
      <form onSubmit={() => {}}>
      <h1 className="App-header">X-State Practice: Login</h1>

      <div className="input-container">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        value={current.context.username}
        onChange={handleChange}
      />
      </div>

      <div className="input-container">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        name="password"
        value={current.context.password}
        onChange={handleChange}
      />
      </div>

      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
