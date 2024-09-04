import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-medium text-black">React Redux Learn </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
