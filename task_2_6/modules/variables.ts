export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
};

export const newItem = document.querySelector('.item__input') as HTMLInputElement;
export const form = document.querySelector('.todo__item') as HTMLFormElement;
export const todoList = document.querySelector('.todo__list') as HTMLLIElement;
export const clearBtn = document.querySelector('.todo__clear') as HTMLButtonElement;

export const items: TodoItem[] = JSON.parse(localStorage.getItem('items') || '[]');