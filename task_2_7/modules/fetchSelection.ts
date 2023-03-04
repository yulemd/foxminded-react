import { Country, CountryItem, selection } from "./variables";

export const fetchSelection = async (url: string): Promise<CountryItem[]> => {
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
    items.sort((a, b) => a.name.localeCompare(b.name));

    return items;
  } catch (error) {
    console.error(error);
    throw error;
  };
};