import { NewPostInputs } from "../types/data";
const URL = "https://jsonplaceholder.typicode.com"

export const addPost = async (endpoint: string, data: NewPostInputs) => {
  const res = await fetch(`${URL}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify({
      title: data.title,
      body: data.body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resData = await res.json();
  return resData;
}