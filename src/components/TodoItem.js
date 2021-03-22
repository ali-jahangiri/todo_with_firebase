import React from "react";

const TodoItem = ({ text, id, index }) => {
  return (
    <div style={{ animationDelay: `${index * 120}ms` }} className="todo">
      <p>{text}</p>
      <div className="todo__controller">
        <p>✍</p>
        <p>🧹</p>
      </div>
    </div>
  );
};

export default TodoItem;
