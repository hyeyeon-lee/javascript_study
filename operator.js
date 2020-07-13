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
