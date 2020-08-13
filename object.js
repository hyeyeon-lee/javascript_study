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

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 6 };
// const person4 = {name: ''};
const person4 = makePerson("hyeyeon", 24);

function makePerson(name, age) {
  /* return {
    name: name,
    age: age,
  }; */

  return {
    name,
    age,
  };
}
console.log(person4);

// object를 필요할 때마다 일일히 만들면
// 불가피하게 동일한 키와 값을 계속 반복해서 작성해야 한다
// => 함수를 이용하여 값을 전달(makePerson)
// class와 비슷한 역할(template), 이전 class가 없을 때 이런 식으로 사용

// 4. Constructor function
// 순수하게 object를 생성하는 함수의 경우 makePerson보다 아래와 같이 작성
// class constructor 와 유사
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

const person5 = new Person("hyeyeon", 44);

// 5. in operator: property existence check (key in obj)
console.log("name" in hyeyeon);
console.log("age" in hyeyeon);
console.log("random" in hyeyeon);
console.log(hyeyeon.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();

for (key in hyeyeon) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
/* 
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
 */
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3]){
const user = { name: "hyeyeon", age: "23" };
const user2 = user;

user2.name = "coder";
console.log(user.name);
// user2의 name을 변경했음에도 user.name도 변경됨
// 같은 ref 참조하고 있어서

console.clear();

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
/* 
const user4 = {};
Object.assign(user4, user);
아래와 동일
 */
const user4 = Object.assign({}, user);
console.log(user4);
