import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import {
  saveTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "./utils/HandleApi";
const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState(false);
  useEffect(() => {
    getAllTodos(setTodo);
  }, []);
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Note-Down</h1>
        <div className="input">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="NOTE DOWN HERE...🖊️"
          />
          <button
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoId, text, setTodo, setText, setIsUpdating)
                : () => saveTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
