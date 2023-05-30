// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// console.log();
//BUG
//BUG
//

// 59. Using Google, StackOverflow and MDN.

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes there
// might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1. Udnderstanding the problem
// - What is the temp amplitude? Answer: difference
// between highest and lowest temp
// - How to compute max and min temperature?
// What is a sensor error? And what to do?

// 2. Breaking up into sub-problems
// - How to ignore error?
// - Fixmax value in temp array
// - Fix min value in temp array
// - Subtract min form max (amplitude) and return it

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// output
// [ 3, 5, 1, 9, 0, 5 ]
// 9 0
// 9

// Problem 2:
//Function should now recive 2 arrays of temps

// 1/ Understanding the problem
// - With 2 arrays, should we implement functionality
// twice? NO!!! Just marge two arrays

// 2. Breaking up into sub-problems
// - Merge 2 arrays

// //push method
// const animals = ["pigs", "goats", "sheep"];
// // console.log(animals);

// const count = animals.push("cows");
// // console.log(count); // output 4
// // console.log(animals); // output  [ 'pigs', 'goats', 'sheep', 'cows' ]

// animals.push("chickens", "cats", "dogs");
// console.log(animals);
// // output  ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"];
