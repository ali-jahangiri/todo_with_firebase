import React, { useState } from "react";
import TodoItem from "./TodoItem";

import EmptyTask from "./EmptyTask";

const TaskDirectory = ({ tasks, inputRef }) => {
  const [currentEditItem, setCurrentEditItem] = useState(null);
  return (
    <>
      {!tasks.length ? (
        <EmptyTask inputRef={inputRef} />
      ) : (
        tasks.map((el, i) => (
          <TodoItem
            isCurrentEditMode={currentEditItem}
            setCurrentEditMode={setCurrentEditItem}
            index={i}
            key={el.id}
            {...el}
          />
        ))
      )}
    </>
  );
};

export default TaskDirectory;
