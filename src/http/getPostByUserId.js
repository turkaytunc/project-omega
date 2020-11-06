export const getPostByUserId = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  const response = await fetch(url);
  const parsedResponse = await response.json();

  return parsedResponse;
};
