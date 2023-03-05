export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string;
}

export interface Cart {
  id: number;
  title: string;
  price: number;
  images: string;
  quantity: number;
}

export const cartTotal = document.querySelector('.modal__totalprice') as HTMLParagraphElement;
export const categoriesList = document.querySelector('.sidebar__list') as HTMLUListElement;
export const productsList = document.querySelector('.shop__list') as HTMLUListElement;
export const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
export const rangeInput = document.querySelector('#price-value') as HTMLInputElement;
export const featuredList = document.querySelector('.featured__list') as HTMLUListElement;
export const cart = document.querySelector('.cart__icon') as HTMLImageElement;
export const exitBtn = document.querySelector('.modal__exit') as HTMLDivElement;
export const modal = document.querySelector('.modal') as HTMLDivElement;
export const darkened = document.querySelector('.darkened') as HTMLDivElement;
export const cartList = document.querySelector('.modal__list') as HTMLUListElement;
export const headerCart = document.querySelector('.header__cart') as HTMLDivElement;
export const cartCount = document.querySelector('.cart__count') as HTMLDivElement;