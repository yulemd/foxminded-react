export const setOpacityIn = (el) => {
  let op = 0;
  setTimeout(function func() {
      if (op > 1) {
        return;
      }
      el.style.opacity = op;
      op += 0.1;
      setTimeout (func, 15);
  }, 0);    
}

export const clearElement = (element) => {
  element.innerHTML = '';
}

export const dayOfTheWeek = (d) => {
  let date = new Date(d * 1000);
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return days[date.getDay()];
}

export const initFunc = () => {
  const cityQuery = localStorage.getItem("city");
  const countryQuery = localStorage.getItem("country");

  return { 
    name: cityQuery ? cityQuery : 'London', 
    country: countryQuery ? countryQuery : 'GB' 
  };
}