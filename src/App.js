import React, { useEffect, useState } from "react";

// components
import Input from "./components/Input";
import Loading from "./components/Loading";
import TaskDirectory from "./components/TaskDirectory";

import db from "./firebase";
import createTask from "./Utils/createTask";

const App = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("todo")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTask(snapshot.docs.map(createTask));
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <h2>Hello there</h2>
      <Input enable={loading} />
      {loading ? <Loading /> : <TaskDirectory tasks={task} />}
    </div>
  );
};

export default App;
