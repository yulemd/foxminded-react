import { TodoItem, todoList, items } from "./variables";

export const saveItems = (): void => {
  localStorage.setItem('items', JSON.stringify(items));
};

export const clearItems = (): void => {
  items.length = 0;
  saveItems();
  todoList.innerHTML = "";
};

export const removeItem = (item: TodoItem, el: HTMLLIElement): void => {
  items.splice(items.indexOf(item), 1);
  el.remove();
  saveItems();
};

export const handleRemoveBtns = (): void => {
  const removeBtns = document.querySelectorAll('.list__remove') as NodeListOf<Element>;
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const found: TodoItem | undefined = items.find(item => (`${item.id}` == btn.getAttribute("name")));
      if (found) {
        const el = btn.parentNode as HTMLLIElement;
        const elToRemove = el.parentNode as HTMLLIElement;
        removeItem(found, elToRemove);
      }
    }); 
  });
};

export const markItem = (el: HTMLInputElement, index: number): void => {
  items[index].completed = el.checked;
  saveItems();
};