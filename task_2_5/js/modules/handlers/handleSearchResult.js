import { clearElement } from "../utils/helperFunctions.js";
import { dataCurrent } from "../utils/variables.js";
import { getCurrentData } from "../data/currentData.js";
import { renderCurrentData } from "../render/renderCurrentData.js";

export const handleSearchResult = async (el) => {
  const temp = el.textContent.split(', ');

  const store = {};

  store.name = temp[0];
  store.country = temp[1];

  localStorage.setItem("city", temp[0]);
  localStorage.setItem("country", temp[1]);

  clearElement(dataCurrent);
  const data = await getCurrentData(store.name, store.country);
  renderCurrentData(data);
}