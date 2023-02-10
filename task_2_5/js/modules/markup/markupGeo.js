export const markupGeo = (storeGeo) => {
  const { name, country } = storeGeo;
  return `<li class="search__item">${name}, ${country}</li>`;
}