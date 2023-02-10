import {  
  urlAPI, 
  keyAPI 
} from "../utils/variables.js";

export const getForecastData = async (lat, lon) => {
  try {
    let linkForecast = `${urlAPI}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyAPI}`;
    const result = await fetch(linkForecast);
    const data = await result.json();

    return data.list.map(list => ({
      dt: list.dt,
      dt_txt: list.dt_txt,
      main: {
        temp_max: list.main.temp_max,
        temp_min: list.main.temp_min
      },
      weather: [{
        id: list.weather[0].id,
        description: list.weather[0].description 
      }],
    }));
  } catch (err) {
    console.log(err);
  }
}