"use strict"; // es5로 엄격하게 해주세요

let clothes = data;
setData(clothes);

function setData(data) {
  const clothesDiv = document.querySelector("#clothes");
  // 비우기
  clothesDiv.innerHTML = "";
  data.forEach((item) => {
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
}

const category = document.querySelectorAll(".category *");
category.forEach((item) => {
  item.addEventListener("click", sortClothes);
});

function sortClothes(e) {
  const target = e.target;
  const targetId = target.id;
  const targetClass = target.className;

  let result = [];
  if (targetClass === "type") {
    // filter, find 헷갈림
    // arrow function {} 헷갈림
    result = clothes.filter((item) => targetId === item.type);
  } else {
    result = clothes.filter((item) => targetId === item.color);
  }

  setData(result);
}
