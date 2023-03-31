import React from "react";
import { useDataQuery } from "../shared/useDataQuery";
import { TodoList } from "../Components/TodoList";

export const TodoPage: React.FC = () => {
  const {data: todos, isLoading, isError, error} = useDataQuery('todos');
  
  if (isLoading) return <div>Loading...</div>;
  if (isError || !todos) return <div>{`${error}`}</div>;

  return <TodoList todos={todos} />;
}