'use strict';

// 👀 SECTION 14: Object-Oriented Programming(OOP) With JavaScript 👻

// 🚨 204. Section Intro
// 🚨 205. Section Roadmap
// 🚨 206. What is Object-Oriented Programming(OOP)?
// 🚨 207. OOP in JavaScript
// 🚨 208. Constructor Functions and the new Operator

// Construction functions always start with capital letter
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
