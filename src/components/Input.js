import React, { useState } from "react";
import db from "../firebase";

import selfTimeout from "../Utils/selfTimeout";
import Task from "../Utils/TaskConstructor";

// decelerate timeout with that timer
const withSelfClearTimeout = selfTimeout(1200);

const Input = ({ enable, reference }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const clickHandler = () => {
    if (text) {
      db.collection("todo").add(Task(text));
      setText("");
    } else {
      setError("Pleas Enter something!");
      withSelfClearTimeout(setError);
    }
  };

  return (
    <div className="header">
      <input
        ref={reference}
        className={`input ${error ? "input--alert" : ""}`}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
        placeholder={error || "Enter your Task"}
      />
      <button disabled={enable} id="submitter" onClick={clickHandler}>
        submit
      </button>
    </div>
  );
};

export default Input;
