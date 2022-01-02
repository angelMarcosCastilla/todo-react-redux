import { ADD_TASK, REMOVE_TASK } from "../types";

const initialState = [
  {
    id: 1,
    value: "salir a correer",
    completed: false,
  },
  {
    id: 2,
    value: "ir a la playa",
    completed: true,
  },
  {
    id: 3,
    value: "jugar basquet",
    completed: false,
  },
];

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK: {
      console.log(action.payload)
      const newTasks = state.filter((task) => task.id !== action.payload);
      return newTasks;
    }
    default:
      return state;
  }
}
