export const getButtons = (data, activeIndex, buttonContainer) => {
  const buttonData = data.map((_, index) => {
    return `<button class= 'btn  btn-number  ${
      activeIndex === index ? "btn-active" : "null   "
    }'    data-index = "${index}" >${index + 1}
</button >`;
  });

  buttonData.unshift("<button class='btn btn-prev'>Prev</button>");
  buttonData.push("<button class='btn  btn-next'>Next</button>");
  buttonContainer.innerHTML = buttonData.join("  ");
};
