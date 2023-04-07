import React from "react";
import "./TodoList.css";
import { Todo } from "./Todo";
import { ITodo } from "../../types/data";

interface ITodoListProps {
  todos: ITodo[];
}

export const TodoList: React.FC<ITodoListProps> = ({ todos }) => {

  return (
    <div className="todoPageElement">
      <h1>Todo List</h1>
      <ul className="pageList">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};