import React from "react";

const EditorController = ({ handlers }) => {
  return (
    <div className="editor__controller">
      <button className="editor__cancel" onClick={handlers.cancelHandler}>
        cancel
      </button>
      <button
        className="editor__submitter"
        onClick={handlers.changeSubmitHandler}
      >
        save
      </button>
    </div>
  );
};

export default EditorController;
