const URL = "https://jsonplaceholder.typicode.com"

export const fetchData = async (endpoint: string) => {
  const res = await fetch(`${URL}${endpoint}`);
  const resData = await res.json();

  return resData;
};