export const renderElement = (element, markup, renderData) => {
  element.insertAdjacentHTML('beforeend', markup(renderData));
}