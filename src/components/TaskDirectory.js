import React, { useState } from "react";
import TodoItem from "./TodoItem";

import EmptyTask from "./EmptyTask";

const TaskDirectory = ({ tasks }) => {
  const [currentEditItem, setCurrentEditItem] = useState(null);
  return (
    <>
      {!tasks.length ? (
        <EmptyTask />
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
