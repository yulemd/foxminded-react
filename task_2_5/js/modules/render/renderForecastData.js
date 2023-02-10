import { dataForecast } from "../utils/variables.js";
import { renderElement } from "./renderElement.js";
import { markupForecast } from "../markup/markupForecast.js";

export const renderForecastData = (storeForecast) => {
  storeForecast.forEach(item => {if (item.dt_txt.includes('15:00:00')) {
    renderElement(dataForecast, markupForecast, item);
  }});
}