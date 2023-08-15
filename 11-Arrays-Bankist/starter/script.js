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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // sort ? means if sprt is true
  // : Default value and this mean if .sort is falls moves become movements
  const movs = sort ? movements.splice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

// 🔴 155. The Magic of Chaining Methods ⬇️
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// 🔴 158. Implementing Login -> 512
// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //this method .blur() removes the cursor after the user si LOGIN

    // Updated UI
    updateUI(currentAccount);
  }
});

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
// 🔴 148.Coding Challenge #1 🤯

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

// 🔴 154. Coding Challenge #2 🤯
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

// 🔴 156. Coding Challenge #3 🤯

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

// 🔴 157. The find Method
// .filter method return all the elements and
// .find method return the first element
// .filter method return new array
// while .find return element itself not array
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

// 🔴 158. Implementing Login - go to line 126

// 🔴 159. Implementing Transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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

    // Updated UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// 🔴 160.The findIndex Method

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

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

// 🔴 161. some and every
/*
console.log(movements);

// Check for EQUALITY
console.log(movements.includes(-130));

// .some CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// .every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filte(deposit));
*/

// 🔴 162. flat and flatMap
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

// .flat method
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// .flatMap method
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
////
*/

// 🔴 163. Sorting Arrays
/*
// example with 'strings' - from A to Z
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // (4) ['Adam', 'Jonas', 'Martha', 'Zach']

// example with numbers 🚨 for numbers we need to use callback function 🚨
console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// OR
movements.sort((a, b) => a - b);
console.log(movements); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// OR
movements.sort((a, b) => b - a);
console.log(movements); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]
*/

// 🔴 164.More ways of Creating and Filling Arrays

const arr = [1, 2, 3, 4, 5, 6, 7]; // (7) [1, 2, 3, 4, 5, 6, 7]
// console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // (7) [1, 2, 3, 4, 5, 6, 7]

// Empty arrays + fill method

const x = new Array(7); // 7 empty arrays
// console.log(x); // (7) [empty × 7]
// console.log(x.map(() => 5)); // the same (7) [empty × 7] so we can't use map

// x.fill(1); // (7) [1, 1, 1, 1, 1, 1, 1]
x.fill(1, 3, 5); // (7) [empty × 3, 1, 1, empty × 2]
x.fill(1); // (7) [1, 1, 1, 1, 1, 1, 1]
// console.log(x);

arr.fill(23, 4, 6); // (7) [1, 2, 3, 4, 23, 23, 7]
// console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
// here we have length: 7 and this means 7 arrays passing to callback function
// in every array in side will be 1 // (7) [1, 1, 1, 1, 1, 1, 1]
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); // (7) [1, 2, 3, 4, 5, 6, 7]

// getting the sum from the interface because we dont have them in
// our code and we will and doing the calculation based on that

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  // We use Array.from to create an Array from the result from the
  // results querySelectorAll --> document.querySelectorAll('.movements__value')
  // what is not real array but array like structure and this array like structure is
  // easily be converted to array with arra.from and second step is included mapping function
  // wich then transforn the initial array to array we wont
  console.log(movementsUI);
});

// 🔴 165. Summary:Which Array Method to Use?
// 🚨 24 array methods 🚨
// push()
// pop();
// shift();
// unshift();
// concat();
// slice();
// splice();
// forEach();
// map();
// filter();
// reduce();
// reduceRight();
// some();
// every();
// indexOf();
// lastIndexOf();
// find();
// findIndex();
// sort();
// reverse();
// isArray();
// includes();
// join();
// toString();

// 🚨 To mutate origunal array
// - Add to original:
// .push  (end)
// .unshift (start)

// - Remove from original:
// .pop (end)
// .shift (start)
// .splice  (any)

// - Others:
// .reverse
// .sort
// .fill

//////////
// 🚨 A new array
// - Computed from original:
// .map (loop)

// - Filtered using condition:
// .filter

// - Portion of original:
// .slice

// - Adding original to other:
// .concat

// - Flattening the original:
// .flat
// .flatMap

/////////////
// 🚨 An array index
// - Based on value:
// .indexOf

// - Based on test condition:
// .findIndex

// 🚨 An array element
// - Based on test condition:
// .find

/////////////////

// 🚨 Know if array includes
// - Based on value:
// .includes

// - Basedon test condition:
// .some
// .every

// 🚨 A new string
// - Based on separator string:
// .join

// 🚨 To transfor to value
// - Based on accumulator:
// .reduce
// (Boil down array to single value of any type:
// number, string, boolean, or even new array or object)

// 🚨 To just loop array
// - Based on callback
// .forEach
// (Does not create a new array, just loop over it)

// 🔴 166.Array Methods Practice

/*
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// // Prefixed ++ operator
// let a = 10;
// console.log(a++); // 10
// console.log(++a); // 11
// console.log(a); // 11

// 3.
const { deposits, withdrowals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrowals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrowals'] += cur;
      return sums;
    },
    { deposits: 0, withdrowals: 0 }
  );

console.log(deposits, withdrowals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

// 🔴 167. Coding Challenge #4 🔴 🤯

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating 
too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, 
and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 
10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended 
food portion and add it to the object as a new property. Do NOT create a new array, simply 
loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams 
  of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: 
Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so 
this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and 
an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice 
and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is 
recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or 
  false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse 
  the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an 
ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture 
to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion 
means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current 
portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 💥 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 💥 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 💥 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 💥 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 💥 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 💥 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 💥 7.
console.log(dogs.filter(checkEatingOkay));

// 💥 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
