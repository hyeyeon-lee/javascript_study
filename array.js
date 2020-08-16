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
