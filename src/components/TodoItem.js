import React from "react";
import { removeTodo } from "../store/actions";

const TodoItem = ({ text, id, dispatcher }) => {
  return (
    <div className="todo">
      <p>{text}</p>
      <div className="todo__controller">
        <p>✍</p>
        <p onClick={() => dispatcher(removeTodo(id))}>🧹</p>
      </div>
    </div>
  );
};

export default TodoItem;
