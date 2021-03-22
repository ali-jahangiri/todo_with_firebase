import React, { useReducer } from "react";

import Input from "./components/Input";
import reducer from "./store/reducer";

import { addTodo } from "./store/actions";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const submitHandler = (payload) => dispatch(addTodo(payload));

  return (
    <div className="container">
      <h2>Hello there</h2>
      <Input submitHandler={submitHandler} />
      {state?.map((el) => {
        return <TodoItem dispatcher={dispatch} key={el.id} {...el} />;
      })}
    </div>
  );
};

export default App;
