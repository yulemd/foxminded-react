import { dataCurrent, dataForecast, searchValue } from "../utils/variables.js";
import { renderElement } from "./renderElement.js";
import { markupCurrent } from "../markup/markupCurrent.js";
import { clearElement } from "../utils/helperFunctions.js";
import { getForecastData } from "../data/forecastData.js";
import { renderForecastData } from "./renderForecastData.js";

export const renderCurrentData = async (store) => {

  searchValue.innerHTML = `${store.name}, ${store.sys.country}`;

  renderElement(dataCurrent, markupCurrent, store);
  
  clearElement(dataForecast);
  const forecastData = await getForecastData(store.coord.lat, store.coord.lon);
  renderForecastData(forecastData);
}