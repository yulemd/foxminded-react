import { handleSubmit } from "./modules/handleSubmit";
import { newTodo } from "./modules/newTodo";
import { form, clearBtn, items } from "./modules/variables";
import { clearItems, handleRemoveBtns, markItem } from "./modules/manageItems";

form?.addEventListener('submit', (e) => handleSubmit(e));

window.addEventListener('DOMContentLoaded', () => {
  items.forEach(item => newTodo(item));
  handleRemoveBtns();
});

clearBtn.onclick = () => clearItems();