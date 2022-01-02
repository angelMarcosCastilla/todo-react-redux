import { useSelector } from "react-redux"
import ListItem from "./ListItem"

function ListTask() {
  const tasks = useSelector(state => state.task)
  return (
   <ul>
     {tasks.map(task =>  <ListItem key={task.id} completed={task.completed} value = {task.value} id={task.id}/>  )}
   </ul>
  )
}

export default ListTask
