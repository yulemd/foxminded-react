import { dayOfTheWeek } from "../utils/helperFunctions.js";

export const markupForecast = (storeForecast) => {
  const { 
    dt, 
    main: { temp_max, temp_min }, 
    weather: [{ id, description }]
  } = storeForecast;
  
  return `<div class="forecast__day day">
            <p class="day__name">${dayOfTheWeek(dt)}</p>
            <i class="owf owf-${id} owf-2x"></i>
            <p class="day__weather">${description}</p>
            <div class="day__temperature">
              <p class="high">${Math.round(temp_max - 273.15)}&deg;C</p>
              <p class="low">${Math.round(temp_min - 273.15)}&deg;C</p>
            </div>
          </div>`;
}