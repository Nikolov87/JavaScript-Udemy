'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 142.Simple Array Methods
//// .slice method
// .slice(2) will start to extract everything after b, this mean will start from c till the end
// .slice(2, 4) here the last parameter is 4 and is not included so the ouput is: (2) ['c', 'd']
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // (3) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // (2) ['c', 'd']
console.log(arr.slice(-2)); // (2) ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -1)); // (3) ['b', 'c', 'd'] //From 1 till -1.
// Without 0 and the last element
console.log(arr.slice()); // (5) ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // (5) ['a', 'b', 'c', 'd', 'e']

// .splice method
// console.log(arr.splice(2)); //(3) ['c', 'd', 'e']
arr.splice(-1); // (4) ['a', 'b', 'c', 'd'] // deleted the lasr element 'e'
arr.splice(1, 2); // (2) ['a', 'd'] // 'b' and 'c' are deleted
console.log(arr); //(2) ['a', 'b'] in this case .splice delete ['c', 'd', 'e'] with arr.splice(2)

// .reverse method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'j', 'g', 'j'];
console.log(arr2.reverse()); // ['j', 'g', 'j', 'i', 'j']
console.log(arr2); // ['j', 'g', 'j', 'i', 'j'] after .reverse only arr2 the output
// will be the new arr alerady reversed

// .concat method
const letters = arr.concat(arr2);
console.log(letters);
// the same result will be if you do
console.log(...arr, ...arr2); // spread operator // a b c d e j g j i j

//.join
console.log(letters.join(' - ')); // a - b - c - d - e - j - g - j - i - j
*/

/////////////////////////
// 143.The new .at Method

const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// Getting the last array element
console.log(arr[arr.length - 1]); // 64
// -1 Always geting the last element from the array
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64

console.log('petar'.at(0)); // p
console.log('petar'.at(-1)); // r
