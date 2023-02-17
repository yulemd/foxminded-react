import { TodoItem, items, todoList } from "./variables";
import { markItem } from "./manageItems";

export const newTodo = (item: TodoItem): void => {
  
  todoList.insertAdjacentHTML('beforeend', 
    `<li class="list__item">
      ${item.title}
      <div class="list__controls">
        <input type="checkbox" class="list__checkbox">
        <button id="remove" class="list__remove" name="${item.id}">
        <img src="bucket.svg" alt="icon" class="list__img">
        </button>
      </div>
    </li>`
  );
  
  const checkB = document.querySelectorAll('.list__checkbox') as NodeListOf<HTMLInputElement>;
  checkB.forEach((el: HTMLInputElement, index: number) => {
    el.checked = items[index].completed;
    el.addEventListener('change', () => markItem(el, index));
  });
};