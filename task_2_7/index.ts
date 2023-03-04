import { 
  searchBtn,
  selection,
  toggleButton,
  modeIcon,
  storedMode,
  storedIcon,
  storedIitle 
} from "./modules/variables";
import { renderCountries } from "./modules/renderCountries";
import { handleSelection } from "./modules/handleSelection";
import { handleSearch } from "./modules/handleSearch";
import { handleMode } from "./modules/handleMode";

renderCountries();

selection.addEventListener('change', (event: Event) => {
  handleSelection(event);
});

searchBtn.addEventListener('click', () => {
  handleSearch();
});

toggleButton.addEventListener('click', () => {
  handleMode();
});

if (storedMode === 'dark') {
  document.body.classList.add('dark');
  modeIcon.src = storedIcon;
  toggleButton.innerText = storedIitle;
};