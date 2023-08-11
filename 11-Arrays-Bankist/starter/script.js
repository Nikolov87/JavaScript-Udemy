'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
/////////////////////////
//TILL LINE 116 //
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
    <div class="movements__value">${mov} €</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

// 🔴 155. The Magic of Chaining Methods ⬇️
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

calcDisplaySummary(account1.movements);
// 🔴 155. The Magic of Chaining Methods⬆️

// from 🔴 151 Computing Usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts); // stw

/////////////////////////////////////////

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// from line 9
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

// 🔴 150.The map Method
// Using data from line 10 till 97

/*
const eurToUsd = 1.1;

// const movementUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// this ⬆️ is the same like this ⬇️ one, but is one line of code with callback function

const movementUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
*/

// 🔴 151. Computing Usernames => line 85

// 🔴 152. The filter Method
/*
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits); //(5) [200, 450, 3000, 70, 1300]

// for of loop variant
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(movements);
console.log(depositsFor); // (5) [200, 450, 3000, 70, 1300]

// Withdrawal / only negative numbers
// 😆 are you serius just turn > 0, to < 0 and you have only the negative numbers

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawals); //[-400, -650, -130]

// OR Jona's solution
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // [-400, -650, -130]
*/

// 🔴 153. The reduce method
/*
console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0); // if you chancge the 0 with 100 will add 100
// console.log(balance); //3840

const balance = movements.reduce((acc, cur) => acc + cur, 0);
// if you chancge the 0 with 100 will add 100
console.log(balance); //3840

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); // 3840

// Example getting maximum value from Movements array -> 3000
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); // 3000////
*/

// 🔴 154. Coding Challenge #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 
years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping 
  dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other 
  challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
// 1️⃣ First solution

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
// // 2️⃣ second solution

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(dogAge =>
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//   );
//   const adultDogs = humanAges.filter(humanAge => humanAge >= 18);
//   const averageHumanAge =
//     adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length;
//   return averageHumanAge;
// };

// // Test Data 1
// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// console.log(calcAverageHumanAge(testData1)); // Result: 44

// // Test Data 2
// const testData2 = [16, 6, 10, 5, 6, 1, 4];
// console.log(calcAverageHumanAge(testData2).toFixed()); // Result: 47
*/

// 🔴 155. The Magic of Chaining Methods // needed code from line 9 till 116
/*
const eurToUsd = 1.1;
console.log(movements);

//
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

// 🔴
