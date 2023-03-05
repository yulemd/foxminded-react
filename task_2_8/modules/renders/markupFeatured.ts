import { Product } from "../variables";

export const markupFeatured = (product: Product): string => {
  return `<li class="featured__card card">
            <img src="${product.images || '../img/main-1.png'}" alt="image" class="card__img" data-product-id="${product.id}">
            <h4 class="card__title" data-product-id="${product.id}">${product.title}</h4>
            <p class="card__price">$${product.price}</p>
          </li>`;
};