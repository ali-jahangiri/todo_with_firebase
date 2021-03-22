import { ADD, EDIT, REMOVE } from "./actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((el) => el.id !== action.payload);
    case EDIT:
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      );
    default:
      return state;
  }
};

export default reducer;
