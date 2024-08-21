import React, { useEffect, useState } from "react";
import "./App.css";

// component imports
import NewTodoForm from "./components/newTodoForm";
import ToDoList from "./components/toDoList";

import FunctionalTimer from "./components/functionalTimer/FunctionalTimer";
import ClassicalTimer from "./components/classicalTimer/ClassicalTimer";

// context impport
import { ThemeProvider } from "./contexts/theme";
//logic imports

interface TodoItem {
  title: string;
  completed: boolean;
}

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [itemsList, setItemsList] = useState<TodoItem[]>([]);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("remTheme") || "light"
  );

  const darkTheme = () => setTheme("dark");
  const lightTheme = () => setTheme("light");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemsList((currentItems) => {
      return [...currentItems, { title: newTodo, completed: false }];
    });
  };

  useEffect(() => {
    localStorage.setItem("remTheme", theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <body className={theme === "light" ? "light-mode" : "dark-mode"}>
        <NewTodoForm
          handleSubmit={handleSubmit}
          setNewTodo={setNewTodo}
          newTodo={newTodo}
        />
        {itemsList.length === 0 && <p>No items to show</p>}
        <ToDoList itemsList={itemsList} />

        <FunctionalTimer timerStartValue={20} />
        <ClassicalTimer timerStartValue={50} />
      </body>
    </ThemeProvider>
  );
}

export default App;
