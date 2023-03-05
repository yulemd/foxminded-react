import { Cart, cartList, cartTotal, headerCart, cartCount } from "../variables";
import { clearElement } from "./clearElement";
import { totalPrice } from "../totalPrice";
import { insertHTMLElement } from "./insertHTMLElement";
import { markupCart } from "./markupCart";

export const renderCart = (productsToRender: Cart[]): void => {
  clearElement(cartList);
  productsToRender.forEach(el => {insertHTMLElement(cartList, markupCart(el))});

  cartTotal.innerText = `Total: $${totalPrice(productsToRender)}`;

  if (headerCart) {
    cartCount.innerText = `${productsToRender.length}`;
  };
};