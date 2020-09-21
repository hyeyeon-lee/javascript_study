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

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  // 이벤트 위임을 위한 상위 선택
  // feedback 9: 이벤트 위임을 사용
  const buttons = document.querySelector(".category");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  //console.log(event.target.dataset.key);
  //console.log(event.target.dataset.value);

  if (key == null || value == null) {
    return;
  }

  const filtered = items.filter((item) => item[key] === value);
  //console.log(filtered);
  displayItems(filtered);
  // but, filtered 부분의 단점
  // 버튼이 클릭될 때마다 요소를 다시 만들어서 innerHTML 업데이트가 되어야 함
  // 개선방법: class display 사용 hide/show
  // updateItems(items, key, value);
}

/* function updateItems(items, key, value) {
  items.forEach((item) => {
    console.log(item);
    if (item[key] === value) {
      item.classList.remove("invisible");
    } else {
      item.classList.add("invisible");
    }
  }); 
}*/

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
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
// feedback 10: 다른 배열을 만들어 할당할 것이 아니라면 배열은 const로! push/pop 가능함
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
