"use strict"; // es5로 엄격하게 해주세요

const clothes = data;

const clothesDiv = document.querySelector("#clothes");
clothes.forEach((item) => {
  //item
  let itemDiv = document.createElement("div");
  itemDiv.setAttribute("class", "item");

  // item > img
  let image = document.createElement("img");
  image.setAttribute("src", `imgs/${item.image}`);
  // item > p
  let text = document.createElement("p");
  let detail = document.createTextNode(`${item.gender}, ${item.size} size`);

  text.appendChild(detail);
  itemDiv.appendChild(image);
  itemDiv.appendChild(text);
  clothesDiv.appendChild(itemDiv);
});
