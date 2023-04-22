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
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => 
{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //  return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1987, 'Petar'));
console.log(yearsUntilRetirement(1990, 'Sylwia'));