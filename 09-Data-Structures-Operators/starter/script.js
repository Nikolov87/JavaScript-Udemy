'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Oreder recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      willd be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIntgredient) {
    console.log(mainIngredient);
    console.log(otherIntgredient);
  },
};

// 108. The Nullish Coalescing Operator(??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish value is only null AND undefined (NOT include 0 or '')
const guestCorrect = restaurant.numGuests ?? 10; // ?? works almost the same like || (OR) operator
console.log(guestCorrect);
console.log(guestCorrect);

///////////////////////////////////////////////////
/*
// 107.Short Circuiting ( && (AND) and || (OR) )
console.log('---- OR ----');
// You can use any data type,
//They can return any data type and they do someting call SHORT-CIRCUITING
console.log(3 || 'Petar'); // output 3 //SHORT-CIRCUITING means if
// the first value is truly = true value will be
// returned if not will be returned the secont value
console.log('' || 'Petar'); // output: Petar
console.log(true || 0); // output: true
console.log(undefined || null); // output: null // null Because both off the values are false value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // output: Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // : means if not print 10
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
// && (AND) operator works exactly the opposite way of (OR) ||
console.log(0 && 'Petar'); // output 0
console.log(7 && 'Petar'); // output Petar
// The (AND) && operator is ONLY TRUE if ALL the operatos are TRUE
console.log('Hello' && 23 && null && 'Petar'); // output: null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
////////////////////////////////////
//106. Rest Pattern and Parameters
// 1* DESTRUCTURING

// SPREAD, BECAUSE ON RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST,BECAUSE ON LEFT SIDE OF =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2* FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
//////////////////////////////////////
// 105. The Spread Operator(...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // output (5) [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr]; //Spread Operator ... (this 3 .)
//take the elements of the array and put them manually in the new array
console.log(newArr); // output (5) [1, 2, 7, 8, 9]

console.log(...newArr); // output 1 2 7 8 9
console.log(1, 2, 7, 8, 9); //output 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // output: ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
console.log(...newMenu); // output: Pizza Pasta Risotto Gnocci
// The Spread Operator take all the elements
//from the array and without creating new variables

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
  'Pasta Calzone',
  'Milk & Rice',
];
console.log(menu);

// Iterables: arrays, strings, maps, sets. But NOT OBJECTS
const str = 'Petar';
const letters = [...str, ' ', 'N.'];
console.log(letters); // output: ['P', 'e', 't', 'a', 'r', ' ', 'N.']
console.log(...str); // output: P e t a r
// console.log(`${...str} Nikolov`);

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Migele' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restorate Bella Italia';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
///////////////////////////////////
//Destucturing Object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//Destucturing Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 14 };
// let c = obj.c;
// ({ a, b, c } = obj);
// console.log(a, b, c); // output: 23 7 14

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // output: 11 23
*/

/*
////////////////
//Destucturing Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// // const [first, second] = restaurant.categories; // output  Italian Pizzeria
// const [first, , second] = restaurant.categories; // thisis like skiping the element in the middle
// // output first and third: Italian Vegetarian
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0)); // output [ 'Garlic Bread', 'Pizza' ]
// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // new output is Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [(5, 6)]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9]; //output 8 9 1
// const [p = 1, q = 1, r = 1] = [8, 9, 7]; //output 8 9 7
// const [p = 1, q = 1, r = 1] = [8];//output 8 1 1
console.log(p, q, r);
*/
//////////////////////////////
