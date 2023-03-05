import { modal, darkened } from "../variables";

export const handleExitCart = (): void => {
  modal.style.right = '-320px';
  darkened.style.opacity = '0';
  setTimeout(() => {
    darkened.style.zIndex = '-1';
  }, 300);
};