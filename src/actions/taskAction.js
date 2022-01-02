import { ADD_TASK, REMOVE_TASK } from "../types"

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

export const removeTask = (id) => {
  console.log(id)
  return {
  type: REMOVE_TASK,
  payload: id
  }
}