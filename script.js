import { displayCard } from "./src/displayCard.js";
import { getButtons } from "./src/getButtons.js";
import { getElement } from "./src/getElement.js";
import { getFetch } from "./src/getFetch.js";
import { paginationPages } from "./src/paginate.js";
import { scroll } from "./src/scrollIndicator.js";

const buttonContainer = getElement(".button-container");
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

let pages = [];
let activeIndex = 0;

// const displayUi = () => {

// }

scroll();

const getFollowers = async () => {
  const data = await getFetch(url);
  // console.log(data);

  // console.log("🚀 ~ file: script.js ~ line 19 ~ getFollowers ~ pages", pages);
  pages = paginationPages(data);
  getButtons(pages, activeIndex, buttonContainer);

  displayCard(pages[activeIndex]);
};

// const displayCard = (data) => {
//   cardContainer.innerHTML = data
//     .map(({ avatar_url: avatar, login, html_url: url }) => {
//       return `   <article class="card">
//         <img src=${avatar}alt="user" class="card-img" />
//         <h2 class="card-title">${login}</h2>
//         <a href=${url} class="card-url">view profile</a>
//         </article>`;
//     })
//     .join("");
//   // cardContainer.insertAdjacentHTML("beforeend", htmlData);
// };

// getFollowers();

// scroll ===================================================================
// window.addEventListener("scroll", () => {
//   const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
//   // console.log(scrollTop, clientHeight, scrollHeight);

//   if (scrollTop > 20) {
//     backToTop.classList.add("show-to-back-top");
//     backToTop.addEventListener("click", () => {
//       document.documentElement.scrollTop = `0px`;
//     });
//   } else {
//     backToTop.classList.remove("show-to-back-top");
//   }

//   indicator.style.width = `${
//     (scrollTop / (scrollHeight - clientHeight)) * 100
//   }%`;

//   // console.log(` ${((scrollHeight - clientHeight) / scrollTop) * 100} `);

//   // console.log((scrollTop / (scrollHeight - clientHeight)) * 100);

//   //  ${
//   //     ((scrollHeight - clientHeight) / scrollTop) * 100
//   //   } %
//   // console.log(
//   //   "🚀 ~ file: script.js ~ line 35 ~ window.addEventListener ~   indicator.style.width",
//   //   indicator.style.width
//   // );

//   //   console.log(
//   //   "🚀 ~ file: script.js ~ line 36 ~ window.addEventListener ~ scrollTop",
//   //   scrollTop,
//   //   clientHeight
//   // );
// });

// const paginationPages = (data) => {
//   const itemsPerPage = 10;
//   const numberOfPages = Math.ceil(data.length / itemsPerPage);
//   const newItemsPage = Array.from({ length: numberOfPages }, (_, index) => {
//     const start = itemsPerPage * index;
//     return data.slice(start, start + itemsPerPage);
//   });

//   return newItemsPage;
// };

// const getButtons = (data, activeIndex, buttonContainer) => {
//   const buttonData = data.map((_, index) => {
//     return `<button class= 'btn  btn-number  ${
//       activeIndex === index ? "btn-active" : "null   "
//     }'    data-index = "${index}" >${index + 1}
// </button >`;
//   });

//   buttonData.unshift("<button class='btn btn-prev'>Prev</button>");
//   buttonData.push("<button class='btn  btn-next'>Next</button>");
//   buttonContainer.innerHTML = buttonData.join("  ");
// };

// buttons

buttonContainer.addEventListener("click", (e) => {
  // console.log(e.target.classList.contains("btn-prev"));
  if (e.target.classList.contains("button-container")) return;

  if (e.target.classList.contains("btn-prev")) {
    activeIndex--;
    // console.log(activeIndex, typeof activeIndex);
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    // console.log(activeIndex);
  }

  if (e.target.classList.contains("btn-next")) {
    activeIndex++;
    if (activeIndex > pages.length - 1) {
      activeIndex = pages.length - 1;
    }

    // console.log(activeIndex, "next");
  }

  if (e.target.classList.contains("btn-number")) {
    activeIndex = parseInt(e.target.dataset.index);
    // console.log(
    //   "🚀 ~ file: script.js ~ line 124 ~ buttonContainer.addEventListener ~ activeIndex",
    //   activeIndex,
    //   typeof activeIndex
    // );

    // console.log(activeIndex, "index");
  }

  displayCard(pages[activeIndex]);
  getButtons(pages, activeIndex, buttonContainer);
});

// buttonContainer.addEventListener("click", (e) => {
//   // console.log(e.target.classList.contains("btn-prev"));

//   // if (e.target.classList.contains("button-container")) return;
//   // prv button
//   if (e.target.classList.contains("btn-prev'")) {
//     console.log("click");
// activeIndex--;
// if (activeIndex > 0) {
//   activeIndex = 0;
// }
//   }
//   // // next button
//   // if (e.target.classList.contains("btn-prev'")) {
//   //   activeIndex++;
//   //   if (activeIndex > pages.length) {
//   //     activeIndex = pages.length;
//   //   }
//   // }
//   // // active button
//   // if (e.target.classList.contains(" btn - active'")) {
//   //   const index = e.target.dataset.index;
//   //   activeIndex = index;
//   // }
//   // displayCard(paginationPages(pages)[activeIndex]);
// });

window.addEventListener("load", getFollowers());
