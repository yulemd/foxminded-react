import { CountryItem } from "./variables";

export const markupCard = (item: CountryItem): string => {
  const formatedPopulation: string = item.population
    .toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true });
  return `<li class="list__card card list__card-light-mode">
  <div class="card__img" style="background-image: url(${item.flag});"></div>
  <h2 class="card__title card__title-light-mode">${item.name}</h2>
  <ul class="card__info info card__info-light-mode">
  <li class="info__population info-light-mode"><span><b>Population:</b></span> ${formatedPopulation}</li>
  <li class="info__region info-light-mode"><span><b>Region:</b></span> ${item.region}</li>
  <li class="info__capital info-light-mode"><span><b>Capital:</b></span> ${item.capital}</li>
  </ul>
  </li>`
};