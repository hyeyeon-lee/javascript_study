# javascript_study

자바스크립트

1. use strict

- console.log

2. variable

- var, let

3. constants

- const

4. variable types

- number, bigint, string
- boolean, null, undefined, symbol
- object

5. dynamic typing

6. operator

- String concatenation
- Numeric operator
- Increment and decrement operator
- Assignment operators
- Comparison Operators
- Logical operators
- Equality
- Conditional operators
- Ternary operator
- Switch statement
- Loops

7. function

- Function declaration
- Parameters
- Default parameters
- Rest parameters
- Local scope

8. class

- Class declarations
- Getter and Setter
- Fields (public, private)
- Static properties and methods
- Inheritance
- Class checking: instanceOf

9. object

- Literals and properties
- Computed properties
- Property value shorthand
- Constructor function
- in operator: property existence check (key in obj)
- for..in vs for..of
- Fun cloning

10. array

- Declaration
- Index position
- Looping over an array
- Addition, deletion, copy
- Searching

11. array api

- join
- split
- reverse
- slice
- find
- filter
- map
- some, every
- reduce
- 체인

12. json

- Object to JSON
- JSON to Object

13. callback

- synchronous / asynchronous
- callback hell

14. promise

- promise 생성하기
- promise 사용하기
- promise chaining
- error handling
- callback hell -> promise

15. async & await

- async
- await
- promise api(all, race)

16. 미니게임

- feedback 1: 불필요한 div wrap
- feedback 2: html 태그 좀더 제대로 사용하기 div p 말고 button, ul등을 사용했으면 더 좋음
- feedback 3: 공통적으로 쓰이는 color, size는 변수로 선언/유지보수에도 용이하고 찾기도 쉬움
- feedback 4: 자바스크립트 = application의 비즈니스 로직 담당으로 데이터가 함께 있으면 좋지 않음 => data.json 분리
- feedback 5: promise 이용해보기
- feedback 6: json 파일 가져오기
- feedback 7: 이전 append 방식보다 훨씬 보기 좋음 => createHTMLString 함수 분리
- feedback 8: id, class만 이용하지 말고 custom property 이용하기(data-)
- feedback 9: 이벤트 위임을 사용
- feedback 10: 다른 배열을 만들어 할당할 것이 아니라면 배열은 const로! push/pop 가능함
- feedback 11: dry, don't repeat yourself: 반복된 코드를 함수로, 너무 많은 기능을 하는 함수는 의미있는 그룹으로 추출!
- feedback 12: Early exit: 너무 많은 중첩은 코드를 보기 힘들게 한다
- feedback 13: 일관성 있는 코드 스타일 (case/querySelector...)
- feedback 14: 직관적인 함수 이름
