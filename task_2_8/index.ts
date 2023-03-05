import { 
  cartTotal,
  categoriesList,
  productsList,
  searchInput,
  rangeInput,
  featuredList,
  cart,
  exitBtn,
  darkened,
  cartList,
  headerCart,
  cartCount
} from "./modules/variables";
import { fetchProducts } from "./modules/fetchProducts";
import { insertHTMLElement } from "./modules/renders/insertHTMLElement";

import { markupProducts } from "./modules/renders/markupProducts";
import { markupFeatured } from "./modules/renders/markupFeatured";
import { markupCategories } from "./modules/renders/markupCategories";
import { markupCart } from "./modules/renders/markupCart";

import { totalPrice } from "./modules/totalPrice";

import { handleInputChange } from "./modules/handlers/handleInputChange";
import { handleOpenCart } from "./modules/handlers/handleOpenCart";
import { handleExitCart } from "./modules/handlers/handleExitCart";
import { handleCategoriesChange } from "./modules/handlers/handleCategoriesChange";
import { handleSearch } from "./modules/handlers/handleSearch";
import { handleFeatured } from "./modules/handlers/handleFeatured";
import { handleCart } from "./modules/handlers/handleCart";
import { handleProducts } from "./modules/handlers/handleProducts";
import { cartProducts } from "./modules/handlers/handleStorage";

import { featuredProducts } from "./modules/featuredProducts";


const products = await fetchProducts();

//відрисовуємо головну сторінку
if (featuredList) {
  featuredProducts(products).forEach(el => { insertHTMLElement(featuredList, markupFeatured(el)) });
};

//прослуховуємо головну сторінку
if (featuredList) {
  featuredList.addEventListener("click", (event: MouseEvent) => {
    handleFeatured(event, products);
  });
};

//відрисовуємо модалку Cart           
cartProducts.forEach(el => {insertHTMLElement(cartList, markupCart(el))});

cartTotal.innerText = `Total: $${totalPrice(cartProducts)}`;

if (headerCart) {
  cartCount.innerText = `${cartProducts.length}`;
};

//прослуховуємо модалку Cart
cart.addEventListener('click', () => { handleOpenCart(); });

exitBtn.addEventListener('click', () => { handleExitCart(); });

darkened.addEventListener('click', () => { handleExitCart(); });

cartList.addEventListener("click", (event: MouseEvent) => { handleCart(event, cartProducts) });

//відрисовуємо сторінку Products
if (categoriesList) {
  const productsCategories = products.map((el) => (el.category));
  const categories = ['All', ...new Set(productsCategories)];
  categories.forEach(el => {insertHTMLElement(categoriesList, markupCategories(el))});
};

if (productsList) {
  products.forEach(el => {insertHTMLElement(productsList, markupProducts(el))});
};

//прослуховуємо події сторінки Products
//---sidebar---
if (searchInput) {
  searchInput.addEventListener('input', () => { handleSearch(products); });
};

if (categoriesList) {
  categoriesList.addEventListener("click", (event: MouseEvent) => {
    handleCategoriesChange(event, products);
    searchInput.value = '';
  });
};

if (rangeInput) {
  rangeInput.addEventListener('input', () => {
    handleInputChange(products);
    searchInput.value = '';
  });
};

//---products---
if (productsList) {
  productsList.addEventListener("click", (event: MouseEvent) => {
    handleProducts(event, products);
  });
};