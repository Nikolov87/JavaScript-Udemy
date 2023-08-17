'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return new Intl.DateTimeFormat(locale).format(date);
};

const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
  i + 1
} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

containerMovements.insertAdjacentHTML('afterbegin', html);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// Fake Always lohged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// day/month/year

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  // .floor rounding down and changing the string to number and you dont need to use + operator

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// 🔴 170.Converting and Checking Numbers

/*
console.log(23 === 23.0); // true

// Base 10 - 0 to 9 // 1/10 = 0.1 // 3/10 = 3.33333333 Infinity 33333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false

// converting string to number NEW WAY
console.log(Number('23'));
console.log(+'23');

// Parsing - .parseInt
console.log(Number.parseInt('30px')); // 30
// if the munber in the string "" start with number
// the output will be number
console.log(Number.parseInt('e30')); // NaN - this mean Not a Number
// if before the munber have something else
// like e30 the output will be a string

console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// console.log(parseFloat('2.5rem')); // 2.5 // BUT THIS IS THE OLD WAY FOR USING IT

// Checking if the value is NaN (not a number)
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(20 / 0)); // false // infinity

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false // infinity
*/

// 🔴 171. Math and Rounding

// Изразът 2 ** 53 - 1 представлява математическо изчисление, което се извършва в
// JavaScript. Нека го разгледаме по-подробно:
// 2 ** 53: Това е операторът на степен (**), който изчислява 2 на степен 53.
// Това е еквивалентно на 2 умножено по себе си 53 пъти.
// Математически: 2^52 = 2 * 2 * 2 * ... * 2 (53 пъти)
// В JavaScript: 2 ** 53 = 9007199254740991

// The expression 2 ** 53 - 1 represents a mathematical calculation that is performed in
// JavaScript. Let's take a closer look at it:
// 2 ** 53: This is the exponent (**) operator that calculates 2 to the 53nd power.
// This is equivalent to 2 multiplied by itself 53 times.
// Math: 2^53 = 2 * 2 * 2 * ... * 2 (53 times)
// In JavaScript: 2 ** 53 = 9007199254740991

/*
console.log(Math.sqrt(25)); // Square root // outout 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI); // 3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.random()); // random numbers between 0 and 1 // every time is different
console.log(Math.trunc(Math.random() * 6) + 1); // remuving decimal part //
// the random output is between 1 and 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20)); // random number between 10 and 20

// Rounding integers
console.log(Math.round(23.6)); // removing decimal part // output 24
console.log(Math.round(23.4)); // rounding to the closest number // 23

console.log(Math.ceil(23.3)); // rounding down // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.4)); // rounding down // 23
console.log(Math.floor('23.9')); // this methods make coercion // output the same 23

// 🚨 .trunc and .floor both cut off the 🚨
// 🚨 decimal part when we work with positive numbers 🚨

// with NEGATIVE NUMBERS WORK IN DIFFERENT
console.log(Math.trunc(-23.4)); // -23
console.log(Math.floor(-23.4)); // -24 in this case .floor is the best way

// 🚨 Rounding decimals 🚨 (Decimal - не цяло число)
console.log((2.7).toFixed(0)); // 3 // but string
console.log((2.7).toFixed(3)); // 2.700 like a string
console.log((2.345).toFixed(2)); // 2.35 like a string
console.log(+(2.345).toFixed(2)); // converting the string to number adding +
*/

// 🔴 172. The Remainder Operator
// оператор за остатък
/*
console.log(5 % 2); // output 1
console.log(5 / 2); // 2.5 // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); // 1
console.log(7 % 2); // 3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(234)); // true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

*/

// 🔴 173. Numeric Separator
/*
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const price = 345_99;
console.log(price); // 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI); // 3.1415

console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230
*/

// 🔴 174. Working with BigInt
/*
console.log(2 ** 53 - 1); // 9007199254740991 The biggest number in JavaScript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// If we do calculations in JS bigger
// this number 9007199254740991 we will not recive the correct result

// From 2020 is using BIG Integer - BibInt with who you can calculate numbers
// bugger how much you need

console.log(4983294879238479283749827394872983479872); // 4.9832948792384794e+39
console.log(4983294879238479283749827394872983479872n);
// 4983294879238479283749827394872983479872n
// Using n you have the all number OR ⬇️
console.log(BigInt('4983294879238479283749827394872983479872'));
// IMPORTATNT THE OUTPUT IN THIS CASE IS A STRING NUMBER

//Operations
console.log(10000n + 10000n);

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));
// in this case we need to convert the normal number to
// BigInt to recive the correct results

//Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true
console.log(20n == '20'); // true

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335
*/

// 🔴 175.Creating Dates

// Create a date
/*
const now = new Date();
console.log(now); //Wed Aug 16 2023 14:12:07 GMT+0100 (British Summer Time)
// The output is the current time and date

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
// 10 is November because the months in JS is from 0
// Thu Nov 19 2037 15:23:05 GMT+0000 (Greenwich Mean Time)
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// 3 days // 24 Hours // 60 min in 1h // 60 sec in 1 min // 1000 miliseconds
// outout -> Sun Jan 04 1970 01:00:00 GMT+0100 (Greenwich Mean Time)
// 3 days later
*/

// Working with dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); //2037-11-19T15:23:00.000Z
console.log(future.getTime()); // 2142256980000

console.log(new Date(2142256980000)); // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time)
console.log(Date.now()); // 1692267112655

future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0000 (Greenwich Mean Time)
*/

// 🔴 176. Adding Dates to "Bankist" App

// 🔴 177. Operations With Dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

// 🔴 178. Internationalizing Dates(Intl)

// 🔴 179. Internationalizing Numbers(Intl)
/*
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

// 🔴 180.Timers: setTimeout and setInterval

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
