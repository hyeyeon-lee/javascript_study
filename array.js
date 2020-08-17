"use strict";

// Array 🎁

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

console.clear();

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// callback 세가지의 인자
// parameter? 전달해도 되고 안해도 되고
fruits.forEach(() => {
  console.log("hed");
});

fruits.forEach((value) => console.log(value));
fruits.forEach((value, index) => console.log(value, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 당겨오고 밀어주는 일을 해야 하기 때문에 사용 지양!
// 중간에 빼고 넣는 것은 index를 사용하기 때문에 나름 빠름
// 전체 배열을 건드리는 경우가 느림 shift, unshift

// splice: remove an item by index position
fruits.push("🍕", "🍔", "🍟");
console.log(fruits);

fruits.splice(1, 1);
// fruits.splice(1); // index만 지정하고 개수를 지정하지 않으면 그 이후로 다 지움
console.log(fruits);
fruits.splice(1, 1, "🥨", "🥐");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍒", "🍇"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
