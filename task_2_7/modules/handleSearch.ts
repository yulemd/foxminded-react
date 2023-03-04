import { API_URL, selection } from "./variables";
import { fetchSearch } from "./fetchSearch";
import { renderCard } from "./renderCard";

export const handleSearch = async (): Promise<void> => {
  const search: HTMLInputElement = document.querySelector('.menu__search')!;
  const searchUrl: string = `${API_URL}/name/${search.value}`;
  
  const searchResult = await fetchSearch(searchUrl);
  renderCard(searchResult);
  search.value = '';

  selection.value = 'default';
  localStorage.setItem("selectedOption", selection.value);
};