import { combineReducers } from "redux";
import types from "./types";

const contactsReducer = (
  state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Rosise Simpsson", number: "459-12-56" }
  ],
  action
) => {
  switch (action.type) {
    case types.ADD_CONTACT:
      return [...state, action.payload.contact];
    case types.DELETE_CONTACT:
      return state.filter(el => el.id !== action.payload.id);
    default:
      return state;
  }
};
const filterReducer = (state = "", action) => {
  switch (action.type) {
    case types.SAVE_FILTER:
      return action.payload.value;
    default:
      return state;
  }
};
export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});
