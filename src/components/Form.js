import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskAction";
import Button from "./Button";
import ListTask from "./ListTask";

function Form() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(value));
  };

  return (
    <div className="mt-36 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10 ">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={value}
          className="mt-5 mx-auto mb-10  bg-blue-50 py-1.5 rounded-none  px-3 inline-block border-2 border-blue-500 font-semibold text-blue-500 outline-none w-9/12"
        />
        <Button />
      </form>
      <ListTask />
    </div>
  );
}

export default Form;
