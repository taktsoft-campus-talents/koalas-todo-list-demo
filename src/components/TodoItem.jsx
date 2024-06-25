import "./TodoItem.css";

// todo: {title: "Einkaufen", isChecked: true}
// onToggleCheck: ()=>{}
// onDelete: ()=>{}

export function TodoItem({ todo, onToggleCheck, onDelete }) {
  console.log(todo);
  return (
    <div className="todo-container">
      <p>{todo.title}</p>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={() => {
          onToggleCheck();
        }}
      />
      <button
        onClick={() => {
          onDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
}
