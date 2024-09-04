import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput(" ");
  };
  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-2">
        <input
          type="text"
          className="bg-gray-200 w-[40%] 
          border-2 border-sky-800
        focus:border-sky-800 
          leading-8 duration-100 transition-colors outline-none text-black py-1 px-3 text-base rounded-none"
          placeholder="Enter A Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 border-2 border-sky-900 bg-sky-800 text-white rounded-none">
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
