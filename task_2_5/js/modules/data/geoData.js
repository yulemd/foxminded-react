import { 
  urlAPI, 
  keyAPI 
} from "../utils/variables.js";

export const getGeoData = async (city) => {
  try {
    let linkGeo = `${urlAPI}/geo/1.0/direct?q=${city},&limit=7&appid=${keyAPI}`;
    const result = await fetch(linkGeo);
    const data = await result.json();

    return data.map(({ name, country }) => ({ name, country }));
  } catch (err) {
    console.log(err);
  }
}