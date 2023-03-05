export const markupCategories = (category: string): string => {
  return `<li class="list__categories" data-category="${category}">${category}</li>`;
};