import "./App.css";
import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoItem } from "./components/TodoItem";
import { useState } from "react";
import { ProgressBar } from "./components/ProgressBar";

function App() {
  // Aus Gründen der Vereinfachung verwenden wir title statt einer eindeutigen id!!
  // Bei Todos mit gleichem Titel wird die Logik nicht funktionieren!
  // todos: [{title: "Küche putzen", isChecked: true}, ...]

  const [todos, setTodos] = useState([]);

  // Create
  function handleCreateTodo(newTodoTitle) {
    // Aufgabe: neues Todo-Objekt erstellen und zum Array hinzufügen
    setTodos([{ title: newTodoTitle, isChecked: false }, ...todos]);
  }

  // Update
  function handleToggleCheck(title) {
    // Aufgabe: isChecked Property für das Todo mit dem übergebenen title togglen
    setTodos(
      todos.map((todo) => {
        if (todo.title === title) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        } else {
          return todo;
        }
      })
    );
  }

  // Delete
  function handleDelete(title) {
    // Aufgabe: todo mit dem übergebenen title aus Array löschen
    setTodos(
      todos.filter((todo) => {
        console.log(todo.title, title, todo.title === title ? false : true);
        return todo.title === title ? false : true;
      })
    );
  }

  return (
    <>
      <h1>Todo List</h1>
      <ProgressBar currentQuestion={3} numQuestions={7} />
      <CreateTodoForm onCreateTodo={handleCreateTodo} />
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.title}
            todo={todo}
            onToggleCheck={() => handleToggleCheck(todo.title)}
            onDelete={() => {
              handleDelete(todo.title);
            }}
          />
        );
      })}
      <p>{JSON.stringify(todos)}</p>
    </>
  );
}

export default App;
