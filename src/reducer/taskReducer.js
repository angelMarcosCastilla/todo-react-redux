import { ADD_TASK } from "../types";

const initialState = [
  {
    id: 1,
    value: "salir a correer",
    completed: false,
  },
  {
    id: 1,
    value: "ir a la playa",
    completed: true,
  },
  {
    id: 1,
    value: "jugar basquet",
    completed: false,
  },
];

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}
