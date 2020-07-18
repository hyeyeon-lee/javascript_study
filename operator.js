// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 
...
1+2 = ${1 + 2}`);

console.log("hyeyeon's book");

// 2. Numeric operator
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;

// 5. Comparison Operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 처음 true를 만나면 멈추니,
// < < < 뒤로갈수록 복잡한 것을 놓기
// 처음부터 복잡한 것 두지 않기
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// or와 동일, heavy 한 operation일수록 제일 뒤에서 처리
console.log(`and: ${value1 || value2 || check()}`);

// often used to compress long if-statement
// nummableObject && nullableObject.something
const nummableObject = null;
if (nummableObject != null) {
  nummableObject.something;
}

// ! (not)
const value3 = true;
console.log(!value3);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("No.....");
  }
  return true;
}

// 7. Equality
// 웬만하면 === (strict) 사용
const stringFive = "5";
const numberFive = 5;

console.log("equality");

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const hyeyeon1 = { name: "hyeyeon" };
const hyeyeon2 = { name: "hyeyeon" };
const hyeyeon3 = hyeyeon1;
console.log(hyeyeon1 == hyeyeon2);
console.log(hyeyeon1 === hyeyeon2);
console.log(hyeyeon1 === hyeyeon3);

// equality - puzzler
console.log("puzzler");
console.log(0 == false); // t
console.log(0 === false); // f
console.log("" == false); // t
console.log("" === false); // f
console.log(null == undefined); //f xxx => t!!
console.log(null === undefined); //f

// 8. Conditional operators: if
// if, else if, else
const name = "hyeyeon";
if (name === "hyeyeon") {
  console.log("hi, hyeyeon");
} else if (name === "jiyeon") {
  console.log("no...");
} else {
  console.log("who are you?");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 간단할 때만 쓰기
console.log(name === "hyeyeon" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "Firefox";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  // console.log("love you");
  // break;
  // 같을땐 케이스 두개 다 그냥 써주면 됨
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
// 피하는 것이 좋음
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

/* 
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

=> 원할때만 출력하도록

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}

/* 
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
} */
