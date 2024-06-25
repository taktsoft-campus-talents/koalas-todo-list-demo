import { useState } from "react";

// onCreateTodo: (newTodoTitle)=>{}

export function CreateTodoForm({ onCreateTodo }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onCreateTodo(newTodoTitle);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodoTitle}
        onChange={(event) => {
          setNewTodoTitle(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
