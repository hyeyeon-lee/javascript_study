'use strict'

let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users = ['hyeyeon', 'harry', 'brown']

let [user1, user2, user3] = users;
// 아래와 동일한 코드
// let user1 = users[0];
// let user2 = users[1];
// let user3 = users[2];

console.log(user1); // hyeyeon
console.log(user2); // harry
console.log(user3); // brown


// ex.
let str = "HYEYEON-TOM-JANE";
let [u1, u2, u3] = str.split('-');
console.log(u1); // HYEYEON
console.log(u2); // TOM
console.log(u3); // JANE


// if. 해당값이 없다면? test
let [a, b, c] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined

// undefined 경우를 방지하기 위해 기본값을 설정해 두기
let [a1 = 3, b1 = 12, c1 = 123] = [1, 2];
console.log(a1); // 1
console.log(b1); // 2
console.log(c1); // **123

// 배열 구조 분해: 일부 반환값 무시 (공백 쉼표)
let [x1, , x2] = ['apple', 'banana', 'car', 'daddy', 'ear']

console.log(x1); // apple
console.log(x2); // car

// 배열 구조 분해: 바꿔치기
let o = 1;
let p = 2;
console.log(o);
console.log(p);

// 둘의 값을 변경하려면 기존로직
let q = o; // 임시 변수 (temp)를 만들어 담아둬야 함
o = p;
p = q;
console.log(o);
console.log(p);

// 배열 구조분해에서 바꿔치기 - 임시 변수가 필요하지 않음
let o1 = 1;
let p1 = 2;
[o1, p1] = [p1, o1];
console.log(o1);
console.log(p1);


