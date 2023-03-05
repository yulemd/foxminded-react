import { Product } from "./variables";

export const featuredProducts = (products: Product[]): Product[] => {
  const featured = [] as Product[];
  do {
    const randomIndex = Math.floor(Math.random() * 30) as number;
    if (!featured.map(el => el.id).includes(products[randomIndex].id)) {
      featured.push(products[randomIndex]);
    };
  } while (featured.length < 3);
  return featured;
};