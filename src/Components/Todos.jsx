import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none lg:w-[50%] w-full mx-auto">
        {todos.map((todo) => (
          <li
            className="py-2 mt-1 px-4 border border-sky-800 flex items-center justify-between bg-sky-800 rounded-none text-white shadow-none w-full"
            key={todo.id}
          >
            {todo.text}
            <button
              className="w-8 h-8 rounded-none bg-gray-700 text-white"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
