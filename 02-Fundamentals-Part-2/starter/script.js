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

// const petarArray = [
//     'Petar',
//     'Nikolov',
//     2037 - 1987,
//     'Student',
//     ['Michael', 'Jonas', 'Steven']
// ];

// Object with 5 key value pairs // each key have value// 
// Object name is petar wich 5 key properties wich diferent value
// const petar = {   
//     firstName: 'Petar',
//     lastName: 'Nikolov',
//     age: 2037 - 1987,
//     job: 'student',
//     friends: ['Michael', 'Jonas', 'Steven']
// };
// console.log(petarArray);
// console.log(petar);

// 43.Dot vs. Bracket Notation

// const petar = {   
//     firstName: 'Petar',
//     lastName: 'Nikolov',
//     age: 2037 - 1987,
//     job: 'Frontend Developer',
//     friends: ['Michael', 'Jonas', 'Steven']
// };

// // console.log(petar);

// console.log(petar.lastName);
// console.log(petar['lastName']);

// const nameKey = 'Name';
// console.log(petar['first' + nameKey]);
// console.log(petar['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Petar? Choose between firstName, lastName, age, job, and friends');
// console.log(petar[interestedIn]);

// if (petar[interestedIn]) {
//     console.log(petar[interestedIn]);
// } else {
//     console.log('Wrong request! What do you want to know about Petar? Choose between firstName, lastName, age, job, and friends');
// }

// petar.location = 'Bulgaria';
// petar['facebook'] = '@PetarNikolov';
// console.log(petar);

// console.log(`${petar.firstName} has ${petar.friends.length} friends, and his best friend is called ${petar.friends[0]}`);


// 44.Object Metods

// const petar = {   
//     firstName: 'Petar',
//     lastName: 'Nikolov',
//     birthYear: 1987,
//     job: 'Frontend Developer',
//     friends: ['Michael', 'Jonas', 'Steven'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () { 
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () { 
//         this.age = 2037 - this.birthYear
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// }; 

// console.log(petar.calcAge());

// // console.log(petar.age); // output 50
// // console.log(petar.age);
// // console.log(petar.age);

// // Challenge
// // "Petar is 50-years old senior Frontend Developer, and hes a/no driver's license"
// console.log(petar.getSummary());

// 45. Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//     name: 'Mark Miller',
//     mass: 78,
//     hight: 1.69
// };

// const john = {
//     name: 'John Smith',
//     mass: 92,
//     hight: 1.95
// };

// mark.calcBMI = function() {
//     this.bmi = this.mass / (this.hight ** 2);
//     return this.bmi;
// }

// john.calcBMI = function() {
//     this.bmi = this.mass / (this.hight ** 2);
//     return this.bmi;
// }


// markBMI = mark.calcBMI();
// johnBMI = john.calcBMI();

// if (markBMI > johnBMI) {
//   console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`);
// } else if (johnBMI > markBMI) {
//   console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`);
// } else {
//   console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI})!`);
// }

// console.log(`${mark.fullName}'s BMI: ${markBMI}`);
// console.log(`${john.fullName}'s BMI: ${johnBMI}`);
 
// // my solution:
// // 1
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//   };
  
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//   };
  
//   // 2
//   mark.calcBMI = function() {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   };
  
//   john.calcBMI = function() {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   };
  
//   // 3
//   let markBMI = mark.calcBMI();
//   let johnBMI = john.calcBMI();
  
//   if (markBMI > johnBMI) {
//     console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`);
//   } else if (johnBMI > markBMI) {
//     console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`);
//   } else {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI})!`);
//   }
  
//   console.log(`${mark.fullName}'s BMI: ${markBMI}`);
//   console.log(`${john.fullName}'s BMI: ${johnBMI}`);
  
// // second Jona's solution

// const mark = {
//         fullName: 'Mark Miller',
//         mass: 78,
//         height: 1.69,
//         calcBMI: function() {
//             this.bmi = this.mass / this.height ** 2;
//             return this.bmi;
//         }
//       };
      
//       const john = {
//         fullName: 'John Smith',
//         mass: 92,
//         height: 1.95,
//         calcBMI: function() {
//             this.bmi = this.mass / this.height ** 2;
//             return this.bmi;
//         }
//       };

//       mark.calcBMI();
//       john.calcBMI();

//       console.log(mark.bmi, john.bmi);

//      //"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

//      if(mark.bmi > john.bmi) {
//         console.log(`${mark.fullName}'s BMI (${mark.bmi})
//         is higher than ${john.fullName}'s BMI (${john.bmi})`);
//      } else if (john.bmi > mark.bmi) {
//         console.log(`${john.fullName}'s BMI (${john.bmi})
//         is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
//      }

//      //output
// //      27.309968138370508 24.194608809993426
// // Mark Miller's BMI (27.309968138370508)
// //         is higher than John Smith's BMI (24.194608809993426)


// 46. Iteration: The for Loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// For loop keep running while condition is TRUE
// for (let rep = 1;  rep <= 30; rep = rep + 1) { //rep ++ means rep = rep + 1 
//     console.log(`Lifting weights repetition 1 ${rep}`);
// }

// 47. Looping Arrays, Breaking and Continuing

// const petar = [
//         'Petar',
//         'Nikolov',
//         2037 - 1987,
//         'teacher',
//         ['Michael', 'Jonas', 'Steven'],
//         true
//     ];

//     const types = [];

//     // console.log(petarArray[0]);
//     // console.log(petarArray[1]);
//     // console.log(petarArray[4]);

//     for(let i = 0; i < petar.length; i++) { //is very importatnt to declarete i < 5, if not will print a lot :D
//         console.log(petar[i], typeof petar[i]);
//         //Filling types array
//         // types[i] = typeof petar[i];
//         types.push(typeof petar[i]); //second way to lop the array
//     }

//     console.log(types);

//     const years = [1991, 2007, 1969, 2020];
//     const ages = [];

//     for (let i = 0; i < years.length; i ++) {
//         ages.push(2037 - years[i]);
//     }
//     console.log(ages);

//     //continue and break 
//     console.log('--- ONLY STRINGS ---');
//     for(let i = 0; i < petar.length; i++) { //is very importatnt to declarete i < 5, if not will print a lot :D
//         if (typeof petar[i] !== 'string') continue;   
//         // !== this mean 'if not' and after that 'string' and the output is only strings
//         console.log(petar[i], typeof petar[i]);
//     }

//     console.log('--- BREAK WITH NUMBER ---');
//     for(let i = 0; i < petar.length; i++) { //is very importatnt to declarete i < 5, if not will print a lot :D
//         if (typeof petar[i] === 'number') break;   
//         // === this mean 'if is equal to a number' and after that 'BREAK WITH NUMBER' and the output is only NUMBER
//         console.log(petar[i], typeof petar[i]);
//     }

// 48. Looping Backwards and loops in Loops
// Loop in the loop :D

// const petar = [
//         'Petar',
//         'Nikolov',
//         2037 - 1987,
//         'Frontend Developer',
//         ['Michael', 'Jonas', 'Steven'],
//         true
//     ];
// // Befor we print from 0, 1, 2, till 4
// //Now we will print from 4, 3, 2, till the last index 0

// for(let i = petar.length - 1; i >= 0; i--) {
//     console.log(i, petar[i]);
// }

// //loop in loop 

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }

// 49. The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE LOOP: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`); 
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }


// 50. Coding Challenge #4

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for ( let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function(arr) {
//     let sum = 0; 
//     for(let i = 0; i < arr.length; i++) {
//     //   sum = sum + arr[i]; this is the same as this one: sum += arr[i];
//       sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));


