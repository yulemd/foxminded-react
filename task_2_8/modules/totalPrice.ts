import { Cart } from "./variables";

export const totalPrice = (allProducts: Cart[]): number => {
  const total = allProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return Number(total.toFixed(2));
};