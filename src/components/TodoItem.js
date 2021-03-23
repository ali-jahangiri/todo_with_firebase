import React, { useState } from "react";

import db from "../firebase";
import EditorController from "./EditorController";
import ItemFreeze from "./ItemFreeze";

const TodoItem = ({
  text,
  id,
  index,
  isCurrentEditMode,
  setCurrentEditMode,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(text);
  // events handler
  const deleteHandler = () => db.collection("todo").doc(id).delete();
  const changeModeHandler = () => {
    setEditMode(true);
    setCurrentEditMode(id);
  };

  const changeSubmitHandler = () => {
    db.collection("todo").doc(id).set({ text: newValue }, { merge: true });
    setNewValue("");
    setEditMode(false);
    setCurrentEditMode(null);
  };
  const cancelHandler = () => {
    setEditMode(false);
    setCurrentEditMode(null);
    setNewValue("");
  };
  // condition rendering base on state
  const editModeParaChecker = () => {
    if (editMode) {
      return (
        <input
          className="editor"
          value={newValue}
          onChange={({ target: { value } }) => setNewValue(value)}
        />
      );
    }
    return <span>{text}</span>;
  };

  const editModeControllerChecker = () => {
    if (editMode)
      return (
        <EditorController handlers={{ cancelHandler, changeSubmitHandler }} />
      );
    return (
      <>
        <p onClick={changeModeHandler}>✍</p>
        <p onClick={deleteHandler}>🧹</p>
      </>
    );
  };
  return (
    <div
      style={{
        animationDelay: `${index * 120}ms`,
        marginTop: `${editMode && "2rem"}`,
      }}
      className="todo"
    >
      {isCurrentEditMode !== id && isCurrentEditMode !== null && <ItemFreeze />}
      <p>{editModeParaChecker()}</p>
      <div className="todo__controller">{editModeControllerChecker()}</div>
    </div>
  );
};

export default TodoItem;
