import React from "react";

const EmptyTask = ({ inputRef }) => {
  const clickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <p className="emptytask">
      You don't have any task ,
      <span onClick={clickHandler}>add new task🏁</span>
    </p>
  );
};

export default EmptyTask;
