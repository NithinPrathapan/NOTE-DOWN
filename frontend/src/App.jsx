import React from "react";
import Todo from "./components/Todo";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Note-Down</h1>
        <div className="input">
          <input type="text" placeholder="NOTE DOWN HERE...🖊️" />
          <button>Add</button>
        </div>
        <div className="list">
          <Todo text={"hello"} />
        </div>
      </div>
    </div>
  );
};

export default App;
