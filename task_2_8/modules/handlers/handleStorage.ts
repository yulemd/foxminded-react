import { Cart } from "../variables";

let store: string = '';
if (localStorage.getItem('current-cart')) {
  store = localStorage.getItem('current-cart') as string;
};
            
export const cartProducts: Cart[] = store ? JSON.parse(store) : [];