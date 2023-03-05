import { Product } from "./variables";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/products.json');
  const data = await response.json();

  const products: Product[] = data.map((product: Product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      images: product.images[0]
    }
  });
  return products;
};