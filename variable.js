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

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되었지만 값이 지정되지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 자료구조에서 고유한 식별자, 동시다발 코드에서 우선순위
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbole1 = Symbol.for("id");
const gSymbole2 = Symbol.for("id");
console.log(gSymbole1 === gSymbole2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
