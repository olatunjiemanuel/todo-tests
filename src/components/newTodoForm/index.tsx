import React, { FormEvent } from "react";
// import styles from "./styles";
import "./styles.css";

// context imports
import useTheme from "../../contexts/theme";

interface newTodoFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setNewTodo: (newTodo: string) => void;
  newTodo: string;
}

const NewTodoForm = ({
  handleSubmit,
  setNewTodo,
  newTodo,
}: newTodoFormProps) => {
  const { theme } = useTheme();

  return (
    <form
      onSubmit={handleSubmit}
      className={`form-container ${theme === "dark" ? "dark-mode" : "default"}`}
    >
      <label htmlFor="add-todo" className="newToDoForm">
        Add a to-do item here
      </label>
      <input
        type="text"
        id="add-todo"
        value={newTodo}
        onChange={(input) => {
          setNewTodo(input.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default NewTodoForm;
