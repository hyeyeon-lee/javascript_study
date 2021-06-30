'use strict'

let user = {name: 'Hyeyeon', age: 27}

let {name, age} = user;
// 이는 아래와 같음
// let name = user.name;
// let age = user.age;
// 또한, let {age, name} = user; 순서를 바꿔줘도 상관 없음!

console.log(name); // mike
console.log(age); // 30

// 새로운 이름으로 변경해서 할당하는 법
let {age: userAge, name: userName} = user;
console.log(userName);
console.log(userAge);


// 객체 구조 분해: 기본값 설정
let fruit = {fname: 'hyeyeon', fdate: '2021-06-30'}
let {fname, fdate, fcolor} = fruit;

console.log(fname);
console.log(fdate);
console.log(fcolor); // undefined

let {fname: fname2, fdate: fdate2, fcolor2 = 'red'} = fruit;

console.log(fname2);
console.log(fdate2);
console.log(fcolor2); // 값이 있다면 그 값, 없다면 default = red