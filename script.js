import { getFetch } from "./src/getFetch.js";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const getFollowers = async () => {
  const data = await getFetch(url);
  console.log(data);
};

// getFollowers();

window.addEventListener("load", getFollowers());
