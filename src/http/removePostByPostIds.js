export const removePostByPostIds = async (postIds) => {
  const statusCodes = postIds.map(async (eachPostId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${eachPostId}`;
    const response = await fetch(url, { method: 'DELETE' });
    return response.status;
  });

  return statusCodes;
};
