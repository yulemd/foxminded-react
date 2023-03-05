import { Product, searchInput, productsList } from "../variables";
import { clearElement } from "../renders/clearElement";
import { insertHTMLElement } from "../renders/insertHTMLElement";
import { markupProducts } from "../renders/markupProducts";
import { searchProducts } from "../searchProducts";

export const handleSearch = (products: Product[]): void => {
  const query = searchInput.value;
  const resultsToRender = searchProducts(products, query);
  clearElement(productsList);
  resultsToRender.forEach(el => { insertHTMLElement(productsList, markupProducts(el)) });
};