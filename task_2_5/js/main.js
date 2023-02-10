import { searchInput } from "./modules/utils/variables.js";
import { initFunc } from "./modules/utils/helperFunctions.js";
import { getCurrentData } from "./modules/data/currentData.js";
import { renderCurrentData } from "./modules/render/renderCurrentData.js";
import { handleInput } from "./modules/handlers/handleInput.js";

window.onload = async (e) => {
  const store = initFunc();
  const data = await getCurrentData(store.name, store.country);
  renderCurrentData(data);
}

searchInput.addEventListener('input', handleInput);