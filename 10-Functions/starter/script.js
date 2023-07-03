'use strict';

//////////////////////////////
// 132. Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greet = greeting =>
//   function (name) {
//     console.log(`${greeting} ${name}`);
//   };

// OR
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Petar'); //Hey Petar
greeterHey('Sylwia'); // Hey Sylwia

greet('Hello')('Petar'); //Hello Petar
greetArr('Hi')('Petar'); //Hi Petar

//////////////////////////////////////////////
// 131.Functions Accepting Callback Functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original  string: ${str}`);
  console.log(`Transformed string:${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Marta', 'Adam'].forEach(high5);
*/

/////////////////////////
// 129. How Passing Arguments Works: Value vs. Reference
/* 
const flight = 'LH234';
const petar = {
  name: 'Petar Nikolov',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH567';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Checked In');
  } else {
    alert('Wrong passport number!');
  }
};

// checkIn(flight, petar);
// console.log(flight);
// console.log(petar);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = petar;

const newPassport = function (person) {
  person.person = Math.trunc(Math.randon() * 100000000000);
};

newPassport(petar);
checkIn(flight, petar);
*/

/////////////////////////
// 128.Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengeres = 1,
  price = 200 * numPassengeres
) {
  // ES5
  //   numPassengeres = numPassengeres || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengeres,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengeres: 1, price: 200}
createBooking('LH123', 2, 700); // {flightNum: 'LH123', numPassengeres: 2, price: 700}
createBooking('LH123', 3); // {flightNum: 'LH123', numPassengeres: 3, price: 600}
createBooking('LH123', 5); // {flightNum: 'LH123', numPassengeres: 5, price: 1000}
*/
