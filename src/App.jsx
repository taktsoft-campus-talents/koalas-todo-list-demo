import "./App.css";
import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoItem } from "./components/TodoItem";
import { useState } from "react";

function App() {
  // todos: [{title: "Küche putzen", isChecked: true}, ...]

  const [todos, setTodos] = useState([
    { title: "Küche putzen", isChecked: true },
    { title: "Einkaufen", isChecked: true },
  ]);

  return (
    <>
      <h1>Todo List</h1>
      <CreateTodoForm
        onCreateTodo={(newTodoTitle) => {
          console.log("App.jsx - onCreateTodo", newTodoTitle);
        }}
      />
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            onToggleCheck={() => {
              console.log("App.jsx: onToggleCheck");
            }}
            onDelete={() => {
              console.log("App.jsx: onDelete");
            }}
          />
        );
      })}
    </>
  );
}

export default App;
