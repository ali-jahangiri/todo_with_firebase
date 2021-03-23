const createTask = (doc) => ({
  id: doc.id,
  text: doc.data().text,
});

export default createTask;
