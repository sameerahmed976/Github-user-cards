import { getElement } from "./src/getElement.js";
import { getFetch } from "./src/getFetch.js";

const backToTop = getElement(".back-to-top");
const indicator = getElement(".indicator-color");

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const cardContainer = getElement(".cards-container");
const getFollowers = async () => {
  const data = await getFetch(url);
  console.log(data);
  displayCard(data);
};

const displayCard = (data) => {
  const htmlData = data
    .map(({ avatar_url: avatar, login, html_url: url }) => {
      return `   <article class="card">
        <img src=${avatar}alt="user" class="card-img" />
        <h2 class="card-title">${login}</h2>
        <a href=${url} class="card-url">view profile</a>
        </article>`;
    })
    .join("");
  cardContainer.insertAdjacentHTML("beforeend", htmlData);
};

// getFollowers();

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

window.addEventListener("load", getFollowers());
