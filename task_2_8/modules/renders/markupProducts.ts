import { Product } from "../variables";

export const markupProducts = (product: Product): string => {
  return `<li class="shop__card card">
  <img src="${product.images || '../img/main-1.png'}" alt="image" class="card__img card-small" data-product-id="${product.id}">
  <h4 class="card__title" data-product-id="${product.id}">${product.title}</h4>
  <p class="card__price">$${product.price}</p>
  </li>`;
};