import {  
  urlAPI, 
  keyAPI 
} from "../utils/variables.js";

export const getCurrentData = async (name, country) => {
  try {
    const cityQuery = localStorage.getItem("city");
    const countryQuery = localStorage.getItem("country");

    const city = cityQuery ? cityQuery : name;
    const countryIndex = countryQuery ? countryQuery : country;

    const linkCurrent = `${urlAPI}/data/2.5/weather?q=${city},${countryIndex}&APPID=${keyAPI}`;

    const result = await fetch(linkCurrent);
    const data = await result.json();

    return {
      name: data.name,
      sys: { country: data.sys.country },
      coord: { 
        lon: data.coord.lon,
        lat: data.coord.lat 
      },
      weather: [{
        id: data.weather[0].id,
        main: data.weather[0].main,
        description: data.weather[0].description 
      }],
      main: {
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max
      }
    };
  } catch (err) {
    console.log(err);
  }
}