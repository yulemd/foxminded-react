import { CountryItem, list } from "./variables";
import { clearList } from "./clearList";
import { markupCard } from "./markupCard";

export const renderCard = (items: CountryItem[]): void => {
  clearList(list);
  items.forEach(item => {
    list.insertAdjacentHTML('beforeend', markupCard(item));
  });
};