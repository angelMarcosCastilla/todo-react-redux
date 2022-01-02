import { ADD_TASK } from "../types"

export const addTask = (value) => {
   const newTask = {
     id: Date.now(),
     value,
     complete:false
   }
  return {
  type: ADD_TASK,
  payload: newTask
  }
}