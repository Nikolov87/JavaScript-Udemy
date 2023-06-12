'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }

//       //   console.log(add(2, 3)); // this one is working because is IN SIDE THE SCOPE
//     }
//     // console.log(str);
//     console.log(millenial); // this output is possible because been used VAR
//     // console.log(add(2, 3)); // this one is not working because is OUT FROM THE SCOPE
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Petar';
// calcAge(1987);

//////////////////////////////////////////////////////////////////
// 95. Hoisting and TDZ in Practice
//Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Petar';
// let job = 'FrontEnd Developer';
// const year = 1987;

//Functions
// console.log(addDecl(1, 0));
// console.log(addExpr(1, 1));Cannot access 'addExpr' before initialization
// console.log(addArrow(1, 2));Cannot access 'addArrow' before initialization
// this mean console.log need to be after the function, if not is not working
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;
// // Example
// if (!numProducts) deleteShoppingCard();
// var numProducts = 10;
// function deleteShoppingCard() {
//   console.log('All product deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x); //true  // is visible only in web inspect console
// console.log(y === window.y); //false
// console.log(z === window.z); //false

/////////////////////
// Both function expressions and function
// declarations are used to define reusable
// blocks of code in JavaScript. The main
// difference between them is that function
// declarations are hoisted, meaning they can
// be called before they are defined in the code.
// Function expressions, on the other hand, are
// not hoisted and can only be called after they
// have been assigned to a variable.
////////////////////

//////////////////////////
// 97. The this Keyword in Practice

// console.log(this); // output window

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear); //  output 36
//   //   console.log(this); // output undefined
// };
// calcAge(1987);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear); // output 36
//   //   console.log(this); // Window
// };
// calcAgeArrow(1987);

// const petar = {
//   // function expression
//   year: 1987,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year); // output 36
//   },
// };
// petar.calcAge();

// const matilda = {
//   year: 1990,
// };
// matilda.calcAge = petar.calcAge;
// matilda.calcAge(); //function borrow

// const f = petar.calcAge;
// // copying the function petar.calcAge //Without calling the function

//////////////////////
// 98. Regular Function vs. Arrow Function

// const petar = {
//   // function expression
//   firstName: 'Petar',
//   year: 1987,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2023 - this.year); // output 36

//     /////// Solution #1
//     //     const self = this; // self or that
//     //     const isMillenial = function () {
//     //       console.log(this);
//     //       console.log(self.year >= 1981 && self.year <= 1996);
//     //     };
//     //     isMillenial();
//     //   },

//     //////// Solution #2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     }; // this time .this keyword is woking because the parent scope petar
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// petar.greet(); // output: Hey undefined
// // because .this is NOT WORKING with arrow funtion
// petar.calcAge();

// //   greet: function () {
// //     console.log(`Hey ${this.firstName}`);
// //   }, // output: Hey Petar
// // };
// // petar.greet();

// //////////////////////////////////////
// // Arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b; // arguments keyword is working in regular function
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b; // but is not working in arrow function
// };
// addArrow(2, 5, 8);
/////////////////////////////////////////

/////////////////////////////
// 99.Primitives vs. Object(Primitives vs.Referens Types)
let age = 35;
let oldAge = age;
age = 36;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Petar',
  age: 35,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
//////// OUTPUT
// Friend: { name: 'Petar', age: 27 }
// Me: { name: 'Petar', age: 27 }
/// PRIMITIVES: Number, String, Boolean, Undefined, Null, Symbol, Biglnt
