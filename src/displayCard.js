import { getElement } from "./getElement.js";

const cardContainer = getElement(".cards-container");

export const displayCard = (data) => {
  cardContainer.innerHTML = data
    .map(({ avatar_url: avatar, login, html_url: url }) => {
      return `   <article class="card">
        <img src=${avatar}alt="user" class="card-img" />
        <h2 class="card-title">${login}</h2>
        <a href=${url} class="card-url">view profile</a>
        </article>`;
    })
    .join("");
  // cardContainer.insertAdjacentHTML("beforeend", htmlData);
};
