export const paginationPages = (data) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  const newItemsPage = Array.from({ length: numberOfPages }, (_, index) => {
    const start = itemsPerPage * index;
    return data.slice(start, start + itemsPerPage);
  });

  return newItemsPage;
};
