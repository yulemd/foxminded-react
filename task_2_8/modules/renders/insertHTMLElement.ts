export const insertHTMLElement = (el: HTMLElement, elHTML: string): void => {
  el.insertAdjacentHTML('beforeend', elHTML);
};