import { useState } from "react";

function TodoItem({ id, title, completed, removeTodo}) {
  const [checked, setChecked] = useState(completed);
  function checkchange(){
    setChecked(!checked);
  }
  return (
    <li>
      <label>
        <input type="checkbox" checked={checked} onChange={checkchange}/>
        <span>{title}</span>
        <span onClick={() => removeTodo(id)}>x</span>
      </label>
    </li>
  );
}

export default TodoItem;
