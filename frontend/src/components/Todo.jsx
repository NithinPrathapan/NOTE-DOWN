import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "../App.css";

const Todo = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit color="#fee" className="icon" onClick={updateMode} />
        <AiFillDelete color="#fee" className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default Todo;
