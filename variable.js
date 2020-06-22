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
