import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, setTodos, checked, setChecked }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} todos={todos} setTodos={setTodos} setChecked={setChecked} checked={checked}/>
      ))}
    </ul>
  );
}

export default TodoList;
