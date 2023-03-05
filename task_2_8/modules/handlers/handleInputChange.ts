import { Product, productsList, rangeInput } from "../variables";
import { clearElement } from "../renders/clearElement";
import { insertHTMLElement } from "../renders/insertHTMLElement";
import { markupProducts } from "../renders/markupProducts";

export const handleInputChange = (products: Product[]): void => {
  const filteredProducts = products.filter(product => product.price <= parseInt(rangeInput.value));
  clearElement(productsList);
  filteredProducts.forEach(el => { insertHTMLElement(productsList, markupProducts(el)) });
};