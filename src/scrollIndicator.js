import { getElement } from "./getElement.js";

const backToTop = getElement(".back-to-top");
const indicator = getElement(".indicator-color");

export const scroll = () => {
  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log(scrollTop, clientHeight, scrollHeight);

    if (scrollTop > 20) {
      backToTop.classList.add("show-to-back-top");
      backToTop.addEventListener("click", () => {
        document.documentElement.scrollTop = `0px`;
      });
    } else {
      backToTop.classList.remove("show-to-back-top");
    }

    indicator.style.width = `${
      (scrollTop / (scrollHeight - clientHeight)) * 100
    }%`;

    // console.log(` ${((scrollHeight - clientHeight) / scrollTop) * 100} `);

    // console.log((scrollTop / (scrollHeight - clientHeight)) * 100);

    //  ${
    //     ((scrollHeight - clientHeight) / scrollTop) * 100
    //   } %
    // console.log(
    //   "🚀 ~ file: script.js ~ line 35 ~ window.addEventListener ~   indicator.style.width",
    //   indicator.style.width
    // );

    //   console.log(
    //   "🚀 ~ file: script.js ~ line 36 ~ window.addEventListener ~ scrollTop",
    //   scrollTop,
    //   clientHeight
    // );
  });
};
