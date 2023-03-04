import { Country, CountryItem } from "./variables";

export const fetchSearch = async (url: string): Promise<CountryItem[]> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const items: CountryItem[] = data.map((country: Country) => {
      return {
        flag: country.flags.svg,
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital ? country.capital[0] : "N/A"
      };
    });

    return items;
  } catch (error) {
    console.error(error);
    throw error;
  };
};