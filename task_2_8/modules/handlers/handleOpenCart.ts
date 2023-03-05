import { modal, darkened } from "../variables";

export const handleOpenCart = (): void => {
  modal.style.right = '0';
  darkened.style.zIndex = '1';
  darkened.style.opacity = '0.5';
};