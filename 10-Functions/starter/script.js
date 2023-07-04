'use strict';

/////////////////////////
// 135.Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0:JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register the answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13,2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

//   [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
////

////////////////////////////
// 134. The bind 🤯 method - after 133.The call and apply Methods
/////
//////////////////////////////////
// 133. The call and apply Methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(963, 'Petar Nikolov');
lufthansa.book(369, 'Sylwia Pechta');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// not working
// book(23, 'Ali Baba');

// Call method
book.call(eurowings, 23, 'Gruh Prashchov');
console.log(eurowings);

book.call(lufthansa, 234, 'Hristo Botev');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Baba Torbalan');

// Apply method
const flightData = [453, 'Tintiri Mintiri'];
book.apply(swiss, flightData); // Tintiri Mintiri booked a seat on Swiss Air Lines flight LX453
console.log(swiss);

book.call(swiss, ...flightData); // Tintiri Mintiri booked a seat on Swiss Air Lines flight LX453

                /////////////
// 134. The bind 🤯 method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Stiven Williams'); // Stiven Williams booked a seat on Eurowings flight EW23

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Petar Nikolov');
bookEW23('Marta Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application - partial means to preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

// the same but in variant function returning function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29
*/

//////////////////////////////
// 132. Function Returning Function
/*
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
*/

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

///////////////////////////////
// 136. Immediately Invoked Function Expression (IIFE)
// Function who runs only ones and never again

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will never run again');
  const isPrivateData = 23;
})(); // Immediately Invoked function expression

// console.log(isPrivateData);
// this not going to work because is defind in the scope, not in the global scope

(() => console.log('This will ALSO never run again'))();

{
  const isPrivateData = 23;
  var notPrivateData = 46;
}
// console.log(isPrivateData);
console.log(notPrivateData);
// this one will work because is decorate with VAR
