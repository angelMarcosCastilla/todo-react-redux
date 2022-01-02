import { useSelector } from "react-redux"
import ListItem from "./ListItem"

function ListTask() {
  const tasks = useSelector(state => state.task)
  return (
   <ul>
     {tasks.map(task =>  <ListItem completed={task.completed} value = {task.value}/>  )}
   </ul>
  )
}

export default ListTask
