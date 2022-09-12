export const getElement = (selector) => {
  if (selector) {
    return document.querySelector(selector);
  }

  throw new Error(`This is a valid selector ${selector}`);
};
