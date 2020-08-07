"use strict";
// object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
// - introduces in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: Hello!`);
  }
}

const hyeyeon = new Person("hyeyeon", 20);
console.log(hyeyeon.name);
console.log(hyeyeon.age);
hyeyeon.speak();

// 2. Getter and Setter
// 클래스를 잘못 사용해도 조금더 방어적으로 사용할 수 있도록
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // return this.age;
    return this._age;
  }

  set age(value) {
    // setter 무한 호출 Maximum call stack size exceeded
    // this.age = value;

    /* if (value < 0) {
      throw Error("age can not be negative");
    } */

    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
// 클래스가 가지고 있는 고유한 값, 데이터에 상관없이 동일하게 사용되는 메소드
// object마다가 아니라 class 자체에 가지고 있음
// 들어오는 데이터에 상관없이 공통적으로 사용하는 메소드의 경우 static
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color !!!!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log(`...good ${this.color} triangle`);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "gray");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// A instanceOf B = A가 B 클래스로 만들어진 인스턴스인지 체크
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // 모든 클래스의 상위
console.log(triangle.toString());
