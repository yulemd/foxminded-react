import { API_URL, selection } from "./variables";
import { fetchCountries } from "./fetchCountries";
import { fetchSelection } from "./fetchSelection";
import { renderCard } from "./renderCard";

export const renderCountries = async (): Promise<void> => {
  try {
    const storedOption = localStorage.getItem("selectedOption");

    if (storedOption && (storedOption != 'all' && storedOption != 'default')) {
      selection.value = storedOption;
      const url = `${API_URL}/region/${selection.value}`;
      const selectedItems = await fetchSelection(url);
      renderCard(selectedItems);
    } else {
      const items = await fetchCountries();
      renderCard(items);
      selection.value = 'default';
    } 
  } catch (error) {
    console.error(error);
    throw error;
  };
};
