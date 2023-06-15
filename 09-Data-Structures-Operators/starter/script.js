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
};

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
