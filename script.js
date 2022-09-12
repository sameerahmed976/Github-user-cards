import { getElement } from "./src/getElement.js";
import { getFetch } from "./src/getFetch.js";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const cardContainer = getElement(".cards-container");
const getFollowers = async () => {
  const data = await getFetch(url);
  //   console.log(data);
  displayCard(data);
};

const displayCard = (data) => {
  const htmlData = data.map(({ avatar_url: avatar, login, url }) => {
    return `   <article class="card">
        <img src=${avatar}alt="user" class="card-img" />
        <h2 class="card-title">${login}</h2>
        <a href=${url} class="card-url">view profile</a>
        </article>`;
  });
  cardContainer.insertAdjacentHTML("beforeend", htmlData);
};

// getFollowers();

window.addEventListener("load", getFollowers());
