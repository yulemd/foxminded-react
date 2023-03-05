import { Product, productsList } from "../variables";
import { clearElement } from "../renders/clearElement";
import { insertHTMLElement } from "../renders/insertHTMLElement";
import { markupProducts } from "../renders/markupProducts";

export const handleCategoriesChange = (event: MouseEvent, category: Product[]): void => {
  if (!event.target) {
    return;
  };
  clearElement(productsList);
  const temp = category.filter(el => {
    if (el.category == (event.target as HTMLElement).dataset.category) {
      insertHTMLElement(productsList, markupProducts(el));
      return true;
    };
  });
  if (!temp.length) {
    category.forEach(el => { insertHTMLElement(productsList, markupProducts(el)) });
  };
};