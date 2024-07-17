import React, { FormEvent } from "react";

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
  return (
    <form onSubmit={handleSubmit} className="App-header">
      <label htmlFor="add-todo">Add a to-do item here</label>
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
