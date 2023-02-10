export const markupCurrent = (store) => {
  const { 
    name, 
    sys: { country }, 
    weather: [{ id, main }],
    main: { temp, feels_like } 
  } = store;
  
  return `<div class="current__temperature">
            <p class="current__temperatureReal">${Math.round(temp - 273.15)}&deg;C</p>
            <p class="current__temperatureFeels">Feels like ${Math.round(feels_like - 273.15)}&deg;C</p>
            </div>
            <div class="current__weather">
            <p class="current__weatherReal">${main}</p>
            <p class="current__weatherWhere">${name}, ${country}</p>
            </div>
          <i class="owf owf-${id} owf-4x"></i>`;
}