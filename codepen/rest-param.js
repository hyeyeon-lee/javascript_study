'use strict'


// 인자의 개수가 제한 없기 때문에 반드시 맞출 필요가 없다
function showName(name) {
    console.log(name);
}

showName(); // undefined
showName('Hyeyeon'); // Hyeyeon
showName('Hyeyeon', 'Tom'); // Hyeyeon ?!

// error는 발생하지 않음
// 자바스크립트에서 함수에 넘겨주는 인자 개수는 제한이 없음
// 개수를 정해서 함수를 만들어도, 반드시 지킬 필요는 없음!

// 함수에 값을 넘겨주는 법
// 1. arguments (과거에는 이것만 가능했음!) - 화살표 함수엔 없음
// 2. 나머지 매개변수 (요즘 추세)


// 1. arguments 예제
function showAge(age) {
    console.log(arguments.length); // 3
    console.log(arguments[0]); // 23
    console.log(arguments[1]); // 25
}

showAge(23, 25, 40);

// argument란?
// 함수로 넘어온 모든 인수에 접근
// 함수 내에서 이용 가능한 지역변수
// length / index
// length라 array 형태라고 생각할 수 있지만 object
// object라서 배열의 내장 메서드 없음 (forEach, map)


// 2. 나머지 매개변수 예제 (ES6 권장)
// 정해지지 않은 개수의 인수를 "배열"로 받을 수 있음 (...배열이름)
// 배열의 메소드들 사용 가능
function showAge2(...ages) {
    console.log(ages);
}

showAge2(); // []! not undefined
showAge2(27); // [27]
showAge2(21, 30); // [21, 30]

// ex. 전달받은 모든 인수를 더하는 함수
// 인자의 개수는 상황에 따라 다름
function add(...numbers) {
    let sum = numbers.reduce((prev, cur) => prev + cur, 0);
    console.log(sum)
}

add(1, 2, 3, 4);
add(1);
add(4, 2, 5, 234, 67, 8, 1, 6, 5, 34);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// ex. 유저 객체를 만드는 생성자 함수
// *** 나머지 매개 변수는 반드시 맨 마지막에! 몇개가 들어올지 모름
function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills; // skills 수는 사람마다 다를 것 -> 나머지 매개변수 사용
}

const user1 = new User('Hyeyeon', 27, 'html', 'css'); // skills [2]
const user2 = new User('Joy', 26, 'vocal', 'dance', 'rap'); // skills [3]
const user3 = new User('Taeyeon', 30, 'english'); // skills [1]
const user4 = new User('Irene', 66); // skills [0]

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
