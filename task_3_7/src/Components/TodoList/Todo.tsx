import React from "react";
import { useQueryClient } from "react-query";
import { ITodo } from "../../types/data";
import { toggleTodo } from "./utils/toggleTodo";

interface ITodoProps {
  todo: ITodo;
}

export const Todo: React.FC<ITodoProps> = ({ todo }) => {
  const client = useQueryClient();

  return (
    <div className="todoItem" onClick={() => toggleTodo(todo, client)}>
      <h2 className={`todoTitle ${todo.completed ? "todoTitle-blue" : ""}`}>{todo.title}</h2>
      <button 
        className={`todoToggle ${todo.completed ? "todoToggle-blue" : "todoToggle-red"}`}
        >
        {todo.completed ? "Completed" : "Not completed"}
      </button>
    </div>
  );
};