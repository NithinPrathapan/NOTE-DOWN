import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { getAllTodos } from "./utils/HandleApi";
const App = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getAllTodos(setTodo);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1>Note-Down</h1>
        <div className="input">
          <input type="text" placeholder="NOTE DOWN HERE...🖊️" />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo key={item._id} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
