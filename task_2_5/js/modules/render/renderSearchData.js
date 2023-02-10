import { searchList, searchInput } from "../utils/variables.js";
import { markupGeo } from "../markup/markupGeo.js";
import { renderElement } from "./renderElement.js";
import { setOpacityIn } from "../utils/helperFunctions.js";
import { handleSearchResult } from "../handlers/handleSearchResult.js";

export const renderSearchData = (storeGeo) => {
  if (!searchList.className.includes('display__block')) {
    searchList.className += ' display__block';
  }

  storeGeo.map(item => (renderElement(searchList, markupGeo, item)));
  setOpacityIn(searchList);
  
  const searchItems = document.querySelectorAll('.search__item');
  searchItems.forEach(item => (item.addEventListener('click', () => {
    searchList.className = 'search__list';
    searchInput.value = '';
    handleSearchResult(item);
  })));
  
  if (!storeGeo) {
    searchList.className = 'search__list';
  }
}