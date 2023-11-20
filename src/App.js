import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function addTodo() {
    title &&
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 999),
          title: title,
          completed: false,
        },
      ]);

    setTitle("");
  }
  
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    console.log("todos changed");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h3>my todo app</h3>
      <div className="input-field">
        <input value={title} type="text" onChange={(e) => handleChange(e)} />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
