import { Country, CountryItem, API_URL } from "./variables";

export const fetchCountries = async (): Promise<CountryItem[]> => {
  try {
    const response = await fetch(`${API_URL}/all`);
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