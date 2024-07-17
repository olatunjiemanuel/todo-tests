import React, { useState } from "react";
import "./App.css";

// component imports
import NewTodoForm from "./components/newTodoForm";
import ToDoList from "./components/toDoList";

interface TodoItem {
  title: string;
  completed: boolean;
}

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [itemsList, setItemsList] = useState<TodoItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemsList((currentItems) => {
      return [...currentItems, { title: newTodo, completed: false }];
    });
  };
  return (
    <>
      <NewTodoForm
        handleSubmit={handleSubmit}
        setNewTodo={setNewTodo}
        newTodo={newTodo}
      />
      {itemsList.length === 0 && <p>No items to show</p>}
      <ToDoList itemsList={itemsList} />
    </>
  );
}

export default App;
