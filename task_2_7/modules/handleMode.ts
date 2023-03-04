import { toggleButton, modeIcon } from "./variables";

export const handleMode = (): void => {
  const body = document.body as HTMLBodyElement;

  const isDark = body.classList.contains('dark');
  const mode = isDark ? 'light' : 'dark';
  toggleButton.innerText = isDark ? 'Dark mode' : 'Light mode';
  modeIcon.src = isDark ? 'img/dark_mode_icon.svg' : 'img/light_mode_icon.svg';

  localStorage.setItem('mode', mode);
  localStorage.setItem('modeIcon', modeIcon.src);
  localStorage.setItem('modeTitle', toggleButton.innerText);
  
  body.classList.toggle('dark');
};