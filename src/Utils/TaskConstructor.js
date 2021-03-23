import firebase from "firebase";

const Task = (text) => ({
  text,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
});
export default Task;
