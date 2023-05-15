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

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Petar';

// const friends = ['Michael', 'Stiven', 'Petar']; 
// console.log(friends);
  
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); // length is a property  
// console.log(friends[friends.length - 1]); // getting index of the last element of the Array

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Petar'
// const petar = [firstName, 'Nikolov', 2023 - 1987, 'student', friends];
// console.log(petar);
// console.log(petar.length);

//Exercise
// const calcAge = function  (birthYear) {
//     return 2037 - birthYear;
// }  
// const years = [1990, 1970, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]),
// calcAge([years.length - 1])];
// console.log(ages);


// * 40. Basic Array Operations(Methods)

// const friends = ['Michael', 'Stiven', 'Petar']; 
// // friends.push('Jay');    // .push adding new element to the array 'Jay'
// const newLength = friends.push('Jay')
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);     // adding element in the begining in the array

// friends.pop();  //removing the last element from the array
// // friends.pop();  // if you do it twice this remove last two elements from the array
// const popped = friends.pop(); // this will print the second element who is taken out from the array
// console.log(popped); 
// console.log(friends);

// friends.shift();  // this remove the first element from the array
// console.log(friends);

// // in which position is certain element
// console.log(friends.indexOf('Stiven'));  
// console.log(friends.indexOf('Maria'));  

// // if we right element who is not in the array we will recive -1

// console.log(friends.includes('Stiven'));  // printout true
// console.log(friends.includes('Maria'));  //trintout false

// if (friends.includes('Stiven')) {
//     console.log('You have a friend called Stiven');
// }

// 41. Coding Challenge #2
 
//// my solution
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = bills.map(calcTip);
// const totals = bills.map((bill, index) => bill + tips[index]);

// console.log(bills);
// console.log(tips);
// console.log(totals);


//Jona's solution
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // arrow function 
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]),
// calcTip(bills[1]),
// calcTip(bills[2])];
// const totals = [bills[0] + tips[0]];

// console.log(bills, tips, totals);


// 42. Introduction to Objects

const petarArray = [
    'Petar',
    'Nikolov',
    2037 - 1987,
    'Student',
    ['Michael', 'Jonas', 'Steven']
];

// Object with 5 key value pairs // each key have value// 
// Object name is petar wich 5 key properties wich diferent value
const petar = {   
    firstName: 'Petar',
    lastName: 'Nikolov',
    age: 2037 - 1987,
    job: 'student',
    friends: ['Michael', 'Jonas', 'Steven']
};
console.log(petarArray);
console.log(petar);