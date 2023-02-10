import { searchInput, searchList } from "../utils/variables.js";
import { clearElement } from "../utils/helperFunctions.js";
import { getGeoData } from "../data/geoData.js";
import { renderSearchData } from "../render/renderSearchData.js";

export const handleInput = async (e) => {
  const city = searchInput.value;
  clearElement(searchList);
  const data = await getGeoData(city);
  renderSearchData(data);
}