"use strict"; // es5로 엄격하게 해주세요

// feedback 5: promise 이용해보기

// Fetch the items from the JSON file
// feedback 6: json 파일 가져오기
function loadItems() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// 기존 setData와 비슷한 html 변경 함수
// Update the list with given items
function displayItems(items) {
  const clothesDiv = document.querySelector("#clothes");
  clothesDiv.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
// feedback 7: 이전 append 방식보다 훨씬 보기 좋음
function createHTMLString(item) {
  return `
  <div class="item">
    <img src="imgs/${item.image}" alt="${item.type}" />
    <p>${item.gender}, ${item.size} size</p>
  </div>`;
}

loadItems()
  .then((items) => {
    displayItems(items);
    //setEventListener(items);
  })
  .catch(console.log);

/* let clothes = data;
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
 */
