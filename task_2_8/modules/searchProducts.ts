import { Product } from "./variables";

export const searchProducts = (products: Product[], query: string) => {
  const results = products.filter(product => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  });
  return results;
};