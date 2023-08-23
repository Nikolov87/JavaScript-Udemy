'use strict';

// 👀 SECTION 14: Object-Oriented Programming(OOP) With JavaScript 👻

// 🚨 204. Section Intro
// 🚨 205. Section Roadmap
// 🚨 206. What is Object-Oriented Programming(OOP)?
// 🚨 207. OOP in JavaScript
// 🚨 208. Constructor Functions and the new Operator

// Construction functions always start with capital letter
/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // adding method to the object
  // BUT NEVER CREATE METHOD INSIDE
  // THE CONSTRUCTIVE FUNCTION
  // instead this we can use prototypes(next video)
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
// 'this' key word in the function will be the empty object becouse we are calling it with new key word 'new'
const petar = new Person('Petar', 1987);

console.log(petar);
// output: Person {firstName: 'Petar', birthYear: 1987}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// We can use this construction function to create new different object we need

const matilda = new Person('Matilda', 2017);
const ivan = new Person('ivan', 1975);
console.log(matilda, ivan);
//output:
// Person {firstName: 'Matilda', birthYear: 2017}
// Person {firstName: 'ivan', birthYear: 1975}

console.log(petar instanceof Person); // true

// 🚨 209. Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
petar.calcAge(); // 50
matilda.calcAge(); // 20

console.log(petar.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(petar.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(petar)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(petar.species, matilda.species);

console.log(petar.hasOwnProperty('species'));
console.log(petar.hasOwnProperty('firstName'));

// 🚨 210. Prototypal Inheritance and The Prototype Chain
// 🚨 211. Prototypal Inheritance on Built-in Object

console.log(petar.__proto__);
// Object .prototype (top of prototype chain)
console.log(petar.__proto__.__proto__);
console.log(petar.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 7, 8, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(x => x + 1);
*/

// 🚨 212. Coding Challenge #1
/* 
1. Use a constructor function to implement a Car. 
A car has a make and a speed property. The speed 
property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will 
increase the car's speed by 10, and log the new 
speed to the console;
3. Implement a 'brake' method that will decrease 
the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 
accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is now going at ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is now going at ${this.speed} km/h.`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
