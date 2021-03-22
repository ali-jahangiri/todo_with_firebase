import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import selfTimeout from "../Utils/selfTimout";

// decelerate timeout with that timer
const withSelfClearTimeout = selfTimeout(1200);

const Input = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const clickHandler = () => {
    if (text) {
      submitHandler({ text, id: uuidv4() });
      setText("");
      if (error) setError("");
    } else {
      setError("Pleas Enter something!");
      withSelfClearTimeout(setError);
    }
  };

  return (
    <div className="header">
      <input
        className={`input ${error ? "input--alert" : ""}`}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
        placeholder={error || "Enter your Task"}
      />
      <button id="submitter" onClick={clickHandler}>
        submit
      </button>
    </div>
  );
};

export default Input;
