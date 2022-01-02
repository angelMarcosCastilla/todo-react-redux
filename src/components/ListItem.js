import Icon from "./Icon";

function ListItem({ completed, value }) {
  return (
    <li className={`mb-3 ${completed && "line-through text-gray-500"}`}>
      <Icon completed={completed ? completed : false} />
      {value}
    </li>
  );
}

export default ListItem;
