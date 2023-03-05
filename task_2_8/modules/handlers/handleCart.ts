import { Cart } from "../variables";
import { renderCart } from "../renders/renderCart";

export const handleCart = (event: MouseEvent, cartProducts: Cart[]): void => {
  if (!event.target) {
    return;
  }; 

  const targetElement = event.target as HTMLElement;

  const productIndex = cartProducts
    .findIndex(el => `${el.id}` == (event.target as HTMLElement).dataset.productRemoveId);
  if (productIndex >= 0) {
    cartProducts.splice(productIndex, 1);
  };
  
  const productToIncrease = cartProducts
    .find(el => `${el.id}` == (event.target as HTMLElement).dataset.productUpId);
  if (productToIncrease) {
    productToIncrease.quantity += 1;
  };

  const productToDecrease = cartProducts
    .find(el => `${el.id}` == (event.target as HTMLElement).dataset.productDownId);
  if (productToDecrease && productToDecrease.quantity !== 0) {
    productToDecrease.quantity -= 1;
  };  

  localStorage.setItem('current-cart', JSON.stringify(cartProducts));

  renderCart(cartProducts);
};