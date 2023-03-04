export interface Country {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital?: string[];
};

export interface CountryItem {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export const list = document.querySelector('.list') as HTMLUListElement;
export const searchBtn = document.querySelector('.menu__searchBtn') as HTMLButtonElement;
export const selection = document.querySelector('.menu__selection') as HTMLSelectElement;

export const toggleButton = document.querySelector('.header__button') as HTMLButtonElement;
export const modeIcon = document.querySelector('.header__icon') as HTMLImageElement;

export const API_URL: string = "https://restcountries.com/v3.1";

export const storedMode = localStorage.getItem('mode') as string;
export const storedIcon = localStorage.getItem('modeIcon') as string;
export const storedIitle = localStorage.getItem('modeTitle') as string;