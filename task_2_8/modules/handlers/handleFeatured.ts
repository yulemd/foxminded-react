import { Product } from "../variables";
import { cartProducts } from "./handleStorage";
import { renderCart } from "../renders/renderCart";

export const handleFeatured = (event: MouseEvent, products: Product[]): void => {
  if (!event.target) {
    return;
  };  
  const cartProductsIds = cartProducts.map(el => el.id);
  const selectedProduct = products
    .find(el => `${el.id}` == (event.target as HTMLElement).dataset.productId);
  if (selectedProduct) {
    if (!cartProductsIds.includes(selectedProduct.id)) {
      cartProducts.push({
        id: selectedProduct.id,
        title: selectedProduct.title,
        price: selectedProduct.price,
        images: selectedProduct.images,
        quantity: 1
      });
    };
  };

  localStorage.setItem('current-cart', JSON.stringify(cartProducts));

  renderCart(cartProducts);
};