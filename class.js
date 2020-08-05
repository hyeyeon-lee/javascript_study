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
