"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

// 33.Functions
/*
function logger() {
    console.log('My name si Petar');
}

// calling, running or invoking functions
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/* Function Declaraations vs.Expressons */

// Function declaration
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(1987);

// // Function expression
// const calcAge2 = function(birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1987);

// console.log(age1, age2);

/* Arrow Functins*/
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1987);
// console.log(age3);

/* Retur the year when need to be reired */
// const yearOfRetirement = (birthYear, firstName) => {
//     const retirementAge = 65;
//     const yearOfRetirement = birthYear + retirementAge;
//     return `${firstName} will retire in ${yearOfRetirement} year`;
// }
// console.log(yearOfRetirement(1987, 'Petar'));
// console.log(yearOfRetirement(1990, 'Sylwia'));


/* will return the age for retirement */
// const yearsUntilRetirement = (birthYear, firstName) => 
// {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //  return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1987, 'Petar'));
// console.log(yearsUntilRetirement(1990, 'Sylwia'));


/*  --> 36. Funcrions Calling Other Functions <-- */

// const cutPieces = function (fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {

//     const applePiecese = cutPieces(apples);
//     const orangePieces = cutPieces(oranges)

//     const juice = `Juice with ${applePiecese} piece of apples and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


/* --> 37.Reviewing Functions <-- */

// const calcAge = function  (birthYear) {
//     return 2037 - birthYear;
// }  

// const yearsUntilRetirement = function (birthYear, firstName) 
// {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🥳`);
//         return -1;
//     }
// } 

// console.log(yearsUntilRetirement(1987, `Petar`));
// console.log(yearsUntilRetirement(1950, `Mike`));


/* --> Coing Challenge #1 <-- */
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const calcAverage = (a, b, c) => {
//     let sum = a + b + c;
//     let avg = sum / 3;
//     return avg;
// }
//  console.log(calcAverage(4, 6, 8));

//  //test data 1:
//  let delphinsScore = calcAverage(44, 23, 71);
//  let koalasScore = calcAverage(65, 54, 49);
//  console.log(delphinsScore, koalasScore);

//  const checkWinner = function(delphinsAvg, koalasAvg) {
//     if (delphinsAvg >= 2 * koalasAvg) {
//     console.log('Delphins win 🥳'); 
//  } else if (koalasAvg >= 2 * delphinsAvg) {
//  console.log('Koalas win 🥳');  
//     } else {
//         console.log('No one win!!!');
//     }
//  }

//  checkWinner(delphinsScore, koalasScore);
//  checkWinner(444, 99)

//  //test data 2 

//  delphinsScore = calcAverage(85, 54, 41);
//  koalasScore = calcAverage(23, 34, 27);
//  console.log(delphinsScore, koalasScore);
//  checkWinner(delphinsScore, koalasScore);
 


/*  39.Introduction to Arrays  */

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Petar';

const friends = ['Michael', 'Stiven', 'Petar']; 
console.log(friends);
  
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // length is a property  
console.log(friends[friends.length - 1]); // getting index of the last element of the Array

friends[2] = 'Jay';
console.log(friends);