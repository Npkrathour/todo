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
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={addTodoHandler}
          className="flex flex-col md:flex-col gap-3 mt-2"
        >
          <input
            type="text"
            className="w-full bg-gray-200
  border-2 border-sky-800 focus:border-sky-800
  leading-8 duration-100 transition-colors outline-none 
  text-black placeholder-black py-2 px-3 text-base rounded-md"
            placeholder="Enter A Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="w-full md:w-auto px-4 py-2 border-2 border-sky-900 
    bg-sky-800 text-white hover:bg-sky-900 transition"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
