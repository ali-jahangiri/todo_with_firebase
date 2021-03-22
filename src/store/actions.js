import { ADD, EDIT, REMOVE } from "./actionTypes";

export const addTodo = (payload) => ({ type: ADD, payload });
export const removeTodo = (payload) => ({ type: REMOVE, payload });
export const editTodo = (payload) => ({ type: EDIT, payload });
