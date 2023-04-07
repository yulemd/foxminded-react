import React from "react";
import { useParams } from "react-router-dom";
import "./UserTodos.css";
import { useDataQuery } from "../../shared/useDataQuery";
import { ITodo } from "../../types/data";
import { Todo } from "../TodoList/Todo";

export const UserTodos: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  
  const {data: todos, isLoading, isError, error} = useDataQuery(`users/${id}/todos`);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !todos) return <div>{`${error}`}</div>;
  
  return (
    <div>
      <ul className="todosList todosList-bg">
        {todos.map((todo: ITodo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}