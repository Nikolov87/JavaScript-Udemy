// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Petar");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let petar_martilda = "PM";
// let $function = 27;

// let person = "petar";
// let PI = 3.1415;

// let myFirstJob = "Programer";
// let myCurrentJob = "Teacher";

// let job1 = "programer";
// let job2 = "teacher";

// console.log(myFirstJob);

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Petar");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1987;
// console.log(typeof year);

// console.log(typeof null);

/*
let age = 35;
age = 36

const birthYear = 1987;
// birthYear = 1988;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Nikolov";
console.log(lastName);
*/
/*
const now = 2023;
const agePetar = now - 1987;
const ageSarah = now - 1990;
console.log(agePetar, ageSarah);

console.log(agePetar * 2, ageSarah / 2, 2 ** 3);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Petar';
const lastName = 'Nikolov';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x ++; // x = x + 1
x --; // 100
x --; // 99
console.log(x);

//Comparison operators
console.log(agePetar > ageSarah); // true
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);*/

/*
const now = 2023;
const agePetar = now - 1987;
const ageSarah = now - 1990;

console.log(now - 1991 > now - 2018)


let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (agePetar + ageSarah) / 2;
console.log(agePetar, ageSarah, averageAge);*/

/*  // coding challenge 
const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHeightBmi = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHeightBmi);
*/

/*
const firstName = 'Petar';
const job = 'junior';
const birthYear = 1987;
const year = 2023;

const petar = "I'm " + firstName + ', a ' + (year -
     birthYear) + ' years old ' + job + '!';
     console.log(petar);

     const petarNew = `I'm ${firstName}, a ${year - birthYear} year old. Working like a junior frontend developer`;
     console.log(petarNew);

     console.log(`Just a regular string.`);

     console.log('String with \n\
     multiple \n\
     lkine');

     console.log(`String
     multiple
     lines`);
     */

/* if / else statement */

/*
     const age = 15;
    

     if(age >= 18) {
        console.log('Sara can start driving license 🚗');
     } else {
        const yearsLeft = 18 - age;
        console.log(`Send Sara go home dring milk and practice NFS and wait another ${yearsLeft} years`);
     }


     const birthYear = 2012;

     let century;
     if (birthYear <= 2000) {
        century = 20;
     } else {
        century = 21;
     }
     console.log(century);
     */

/* Challenge */

/*
     const BMIJohn = 28.3;
     const BMIMark = 23.9;

     if (BMIJohn >= BMIMark) {
        console.log(`John's BMI is higher than Mark's`);
     } else {
        (BMIJohn >= BMIMark)
        console.log(`Mark's BMI is higher than John's`);
     }
     */

     /*
     const massJohn = 78;
     const heightJohn = 1.69;
     const massMark = 92;
     const heightMark = 1.95;


// const massJohn = 95;
// const heightJohn = 1.88;
// const massMark = 85;
// const heightMark = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's`);
}
*/


/* 20. Type Conversion and Coercion  */

// const inputYear = '1987 ';
// console.log(Number(inputYear)); //converting strings to numbers
// console.log(Number(inputYear) + 18);

// console.log(Number('Petar'));
// console.log(typeof NaN);

// // converting strings to numbers
// console.log(String(35, 35));

// // type coercion
// console.log('I am ' + 35 + ' years ols');
// // console.log('I am ' + String(35) + ' years ols');
// console.log('35' - '10' - 3); //strings to numbers
// console.log('35' / '2');

// let n = '1' + 1;   // '1' + 1 = 11
// n = n - 1;   // 11 - 1 = 10
// console.log(n);   // output 11



/* 21. Truthy and Falsy Values */
// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Petar'));
console.log(Boolean({})); 
console.log(Boolean('')); 

const money = 0;
if(money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED'); 
} */


// 22. Equality Operators:==vs.===
/*
const age = '18';
if (age === 18) 
console.log('You just become an adult :D(string)');

if (age == 18) 
console.log('You just become an adult :D(loose)');

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool numbre');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite != 23)
console.log('Why not 23?'); */


/* 23. Booleon Logic */
/* 24. Logical Operators */

// const hasDriversLicense = true; // A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision); // && AND 
// console.log(hasDriversLicense || hasGoodVision); // || OR
// console.log(!hasDriversLicense); // ! NOT

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }


// Coding Challenge #3
// Test data
// Dolphins score 96, 108 and 89. 
// Koalas score 88, 91 and 110

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win 🥳');
// } else if (scoreDolphins < scoreKoalas) {
//     console.log('Koalas win 🥳');
// } else if (scoreDolphins===scoreKoalas) {
//     console.log('Both win 🤪');
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (198 + 110 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100 ) {
//     console.log('Dolphins win 🥳');
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >=100) { 
//     console.log('Koalas win 🥳');
// } else if (scoreDolphins===scoreKoalas && scoreDolphins >= 100 && scoreKoalas >=100) {
//     console.log('Both win 🤪');
// } else {
//     console.log('No one win 🤨');
// }


// The switch Statement

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meeting');
//         break;
//     case 'tuesday':
//         console.log('Prepear theory video');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// const day = 'monday';
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meeting');
// } else if (day === 'tuesday') {
//     console.log('Prepear theory video');
// } else if (day === 'wednesday') {
//     console.log('Write code examples');
// } else if (day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday') {
//     console.log("Enjoy the weekend :D");
// } else if (day === 'sunday') {
//     console.log("Enjoy the weekend but no too much, Monday you are working :D");
// } else {
//     console.log('Not a valid day!');
// }