import React from "react";

interface TodoItem {
  title: string;
  completed: boolean;
}

interface ToDoListProps {
  itemsList: TodoItem[];
}

const ToDoList = ({ itemsList }: ToDoListProps) => {
  return (
    <>
      <ul>
        {itemsList.map((item) => {
          return (
            <li key={item.title}>
              <p>{item.title}</p>
              <p>{item.completed ? "yes" : "no"}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
