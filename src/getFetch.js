export const getFetch = async (url) => {
  const response = await fetch(url);
  return response.json();
};
