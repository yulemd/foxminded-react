import { API_URL, selection } from "./variables";
import { fetchSelection } from "./fetchSelection";
import { renderCard } from "./renderCard";

export const handleSelection = async (event: Event): Promise<void> => {
  const target = event.target as HTMLSelectElement;
  const selectUrl: string = target.value == 'all' 
    ? `${API_URL}/${target.value}` 
    : `${API_URL}/region/${target.value}`;
  
  const selectResult = await fetchSelection(selectUrl);
  renderCard(selectResult);
  localStorage.setItem("selectedOption", selection.value);
};