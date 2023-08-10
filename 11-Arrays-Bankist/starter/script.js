'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
/////////////////////////
/*
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
*/
/////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 🔴 142.Simple Array Methods
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
// 🔴 143.The new .at Method
/*
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
*/

///////////////////////////
// 🔴 144. Looping Arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}
// Second variant
console.log('----- FOREACH ----');
movements.forEach(function (mov, i, arr) { // callback function
  // this is
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
*/

// 🔴 145. forEach With Maps and Sets
/*
// Example for Map
const currencies = new Map([
  ['USD', 'United States dollar'], // USD = key / 'United States dollar' = value
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Example for set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
// 🔴 146. PROJECTO:"Bankist"App
// 🔴 147. Creating DOM Elements

///////////////////////////////////////
// 🔴 148.Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about 
their dog's age, and stored the data into an array (one array for each). For now, 
they are just interested in knowing whether a dog is an adult or a puppy. A dog is 
an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 
'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that 
copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an 
adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaNew = dogsJulia.slice();
  dogsJuliaNew.splice(0, 1);
  dogsJuliaNew.splice(-2);

  const dogs = dogsJuliaNew.concat(dogsKate);
  console.log(dogs);

  //"Dog number 1 is an adult, and is 5 years old")
  // or a puppy ("Dog number 2 is still a puppy 🐶"
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

// 🔴 149.Data Transformations:map, filter, reduce.
