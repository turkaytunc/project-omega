export const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);

  const parsedResponse = await response.json();

  return parsedResponse;
};
