'use strict'

// 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2];
console.log(result) // [1,2,3,4,5,6]

// 기존 push, splice, concat... 을 대체하여 쉽게 배열 변형 가능
let result2 = [0, ...arr1, ...arr2, 7,8,9]
console.log(result2)


// 객체
let user = {name: 'Mike'}
let mike = {...user, age: 22}
console.log(mike)


// 복제 object assign이 필요하지 않음
let oarr = [1, 2, 3];
let narr = [...oarr];

let ouser = {name: 'Mike', age: 30}
let nuser = {...ouser};

nuser.name = 'hyeyeon'
console.log(ouser.name);
console.log(nuser.name);


// Q1. [1,2,3] 을 [4,5,6,1,2,3]으로 만들기
let qarr1 = [1,2,3];
let qarr2 =  [4,5,6];

// A1
qarr2.reverse().forEach((num) => {
    qarr1.unshift(num);
})
console.log(qarr1)

// A2: 전개구문 사용
let qresult1 = [...arr2, ...arr1];
console.log(qresult1);

// Q2. 객체로도 해보기

let quser = {name: 'Mike'};
let info = {age: 30};
let fe = ["JS", "REACT"];
let lang = ["KOREAN", "ENGLISH"]

console.log(quser)

// 혼자 풀이
// let qobj1 = Object.assign(quser, info, {fe, lang})
// console.log(qobj1)
// 이러면 qobj1 === quser 가 TRUE로 나옴 (같은값)
// quser 값까지 바뀌게 되는 것 *유의*


// A1. 
let qobj1 = Object.assign({}, user, info, {
    skills: []
})
fe.forEach(f => qobj1.skills.push(f));
lang.forEach(lang => qobj1.skills.push(lang));
// 위 foreach는 배열 전개구문으로 대체 가능 
// qobj1.skills = [...fe, ...lang]
console.log(qobj1)

// A2. 전개구문 사용
let qobj2 = {...quser, ...info, skills:[...fe, ...lang]}
console.log(qobj2)