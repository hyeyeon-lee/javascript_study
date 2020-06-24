// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";
console.log("Hello world");
console.log(age);

// 2. Variable
// let (added in ES6)
//  global: 프로그램 시작에서 끝까지 메모리 탑재 - 최소한으로 쓰는 것이 좋음
let globalName = "global name";
// block scope
{
  let name = "hyeyeon";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration)
// 어디에 선언했는지 상관없이 항상 맨 위로 끌어올림
// has no block scope
console.log(age);
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants
// 선언한 후엔 변경할 수 없음 - immutable
// favor immutable data type always for a few reasons:
// 웬만하면 값 할당 후 변경되지 않는 경우 사용
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
// mutable - let / immutable - const

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN(Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
