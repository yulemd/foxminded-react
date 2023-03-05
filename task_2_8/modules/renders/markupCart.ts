import { Cart } from "../variables";

export const markupCart = (cartProduct: Cart): string => {
  return `<li class="modal__item item">
            <div class="item__description">
              <img src="${cartProduct.images || '../img/main-1.png'}" alt="" class="item__img">
              <div class="item__text">
                <p class="item__title">${cartProduct.title}</p>
                <p class="item__price">$${cartProduct.price}</p>
                <button class="item__btn" data-product-remove-id="${cartProduct.id}">remove</button>
              </div>
            </div>
            <div class="item__count">
              <div class="item__up" data-product-up-id="${cartProduct.id}"></div>
              <p class="item__items">${cartProduct.quantity}</p>
              <div class="item__down" data-product-down-id="${cartProduct.id}"></div>
            </div>
          </li>`;
};