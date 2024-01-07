"use strict";
const categories = document.querySelectorAll(".item");
console.log(`Nomber of categories: ${categories.length}`);

categories.forEach((items) => {
  const title = items.firstElementChild;
  console.log(`Category: ${title.textContent}`);
  const elements = items.lastElementChild;
  console.log(elements.length);
});
