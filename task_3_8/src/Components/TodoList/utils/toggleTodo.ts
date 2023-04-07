import { ITodo } from "../../../types/data";
import { QueryClient } from "react-query";


export const toggleTodo = (todo: ITodo, client: QueryClient) => {
  
  const currentTodos: ITodo[] | undefined = client.getQueryData( 'todos' );
  if (currentTodos) {
    const updatedTodos = currentTodos.map((item: ITodo) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    client.setQueryData( 'todos', updatedTodos );
  }
};