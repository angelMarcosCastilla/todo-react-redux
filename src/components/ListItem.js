import { useDispatch } from "react-redux";
import { removeTask } from "../actions/taskAction";
import Icon from "./Icon";

function ListItem({ completed, value,id }) {
  const dispatch = useDispatch()
  return (
    <li className={`mb-3 ${completed && "line-through text-gray-500"}`}>
      <Icon completed={completed ? completed : false} />
      {value}
     <div className="inline-block  ml-5">
     <span onClick={()=>dispatch(removeTask(id))} className="mr-4 cursor-pointer">🗑</span>
      <span className="cursor-pointer">✏</span>
     </div>
    </li>
  );
}

export default ListItem;
