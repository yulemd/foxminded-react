import { TodoItem, newItem, items } from "./variables";
import { saveItems, handleRemoveBtns } from "./manageItems";
import { newTodo } from "./newTodo";

export const handleSubmit = (e: Event): void => {
  e.preventDefault();

  if (!newItem.value) return;

  const item: TodoItem = {
    id: Date.now(),
    title: newItem.value,
    completed: false
  };
  
  items.push(item);
  saveItems();
  
  newTodo(item);
  newItem.value = "";

  handleRemoveBtns();
};