// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = { key : value };

// 1. Literals and properties

// const name = "hyeyeon";
// const age = 4;
// print(name, age);

// parameter가 늘어날 때마다 추가해야 할 로직이 많아짐
/* 
A..
function print(name, age) {
  console.log(name);
  console.log(age);
}
 */

// 위 방법을 개선하기 위한 object 사용!

// object 만드는 법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

/* A 개선 */
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const hyeyeon = {
  name: "hyeyeon.lee",
  age: 34,
};
print(hyeyeon);

// with Javascript magic (dynamically typed language)
// 타입이 런타임 때 결정

hyeyeon.hasJob = true;
console.log(hyeyeon.hasJob);
// 동적으로 속성 추가 가능... but 가능하면 사용하지 않도록(유지보수가 어려움, 에러)

delete hyeyeon.hasJob;
// 동적으로 속성 삭제 가능... 미친짓
console.log(hyeyeon.hasJob);

// 2. Computed properties
// key should be always string!
console.log(hyeyeon.name); // dot
console.log(hyeyeon["name"]); // []
hyeyeon["hasJob"] = true;
console.log(hyeyeon.hasJob);

// dot: 코딩하는 순간 필요한 키의 값을 받아오고 싶을 떄
// computed properties: 정확하게 어떤 키의 값을 받아올지 모를 때 (runtime에서 결정될 때)

function printValue(obj, key) {
  // key: 사용자가 입력, 코딩하는 순간엔 알 수 없음
  // console.log(obj.key);
  console.log(obj[key]);
}
printValue(hyeyeon, "name");
printValue(hyeyeon, "age");
