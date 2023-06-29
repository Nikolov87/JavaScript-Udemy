'use strict';
// 112.Enhanced Object Literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'tri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced  object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Oreder recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      willd be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIntgredient) {
    console.log(mainIngredient);
    console.log(otherIntgredient);
  },
};

////////////////////////////////////////
// 123. Working with STRINGS - PART 3

console.log('a+vary+nice+string'.split('+')); // (4) ['a', 'vary', 'nice', 'string']
console.log('Petar Nikolov'.split(' ')); // [ 'Petar', 'Nikolov' ]

const [firstName, lastName] = 'Petar Nikolov'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Petar NIKOLOV

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); // Jessica Ann Smith Davis
capitalizeName('petar nikolov'); // Petar Nikolov

//Padding method
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Petar'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(32489765791384719));
console.log(maskCreditCard('87346873468734684368'));

// Repeat method
const message2 = 'Bad weather... All Departures Deplayed... ';
console.log(message2.repeat(5)); // the message will be repeated 5 times

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(7);
planesInLine(9);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

///////////////////////////////////////
// 122. Working with STRINGS - PART 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLocaleLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = 'pEtAr'; //Petar
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // output: Petar

// Comaparing emails
const email = 'hello@petar.io';
const loginEmail = '  Hello@Petar.Io \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // hello@petar.io
// OR
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail); // hello@petar.io
console.log(email === normalizedEmail); // true

// Replacing parts of string

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// OR regular expressions
console.log(announcement.replace(/door/g, 'gate')); // //this two and g after them(g = global)
// output: All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // output: true
console.log(plane.includes('Boeing')); // output: false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have laptop, some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and some gun for protection');
*/

///////////////////////////////////////
// 121. Working with STRINGS - PART 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // output 16
console.log('B737'.length); // output 4

console.log(airline.indexOf('r'));
// the output is 6 because 'r' is on position 6
// and strat counting from 0, not from 1. Counting the space as well
console.log(airline.lastIndexOf('r'));
// output 10 because giving you the last index 'r'
console.log(airline.indexOf('Portugal')); // output 8

console.log(airline.slice(4));
//output Air Portugal because on position 4 start the word Air
//and printout the rest as well
console.log(airline.slice(4, 7)); // output only Air, because 7 is the space
console.log(airline.slice(0, airline.indexOf(' '))); // output TAP,
// only the first word from 0 till ' ' the space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // output Portugal, of you not write +1
// will be space before  Portugal
console.log(airline.slice(-2)); // output last 2 elements: al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat😲');
  else console.log('You got lucky 😀');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Petar')); // [String: 'petar']
console.log(typeof new String('Petar')); // object
*/

///////////////////////////////////////
// Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Task 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
///////////////////////////////////
// 119. Summary:Which Data Structure to Use?//

///////////////////////////////////
// 118.Maps:Iteration
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert Map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.key()]);
console.log([...question.value()]);
*/

//////////////////////////////////
// 117. Maps Fundamentals // Map is a data structure that we can use to map values to keys
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // ading new key

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

/////////////////////////////////////////
// 116. Set
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Petar')); // output: Set(5) {'P', 'e', 't', 'a', 'r'}

console.log(ordersSet.size); // output: 3 because are 3 diferent meals
console.log(ordersSet.has('Pizza')); // output: true
// .has method is similar to . include method in arrays
console.log(ordersSet.has('Bread')); // output: false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto'); // output: Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}
// Without 'Risotto'
// ordersSet.clear(); // output: Set(0) {size: 0}
console.log(ordersSet);

for (const order of ordersSet) console.log(order); // looping of sets
// output: Pasta Pizza Garlic Bread

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('petarplamenovnikolov'));
*/

////////////////////////////////////////////
// 115.Coding Challenge #2.
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// Task 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// Task 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
*/

/*
/////////////////////////////
// 114.Looping Object: Object Kyes, Values, and Entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}`;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entries Object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open from ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////
// 113. Optional Chaining(?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'tri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jinas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
*/
//////////////////////////////////////////
/*
// 111. Looping Arrays:The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // for of loop
// item is always the current element in each iteration

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// or
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

///////////////////////////////////////
// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
prints each of them to the console, along with the number of goals that were scored in total (number of 
player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more 
likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function 
again with players from game.scored
GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
// const { players } = game;
// const [players1, players2] = players;
// console.log(players);
//J.S
const [players1, players2] = game.players;
console.log(players1, players2);

// // Task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, ...fieldPlayers);
//J.S. //the same

// Task 3
// J.S. the same
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 4
//J.S. the same
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // Task 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(game.odds); // output {team1: 1.33, x: 3.25, team2: 6.5}
//J.S.
const {
  odds: { team1, x: drow, team2 },
} = game;
console.log(team1, drow, team2); // output: 1.33 3.25 6.5

// Task 6
// function printGoals(...playerNames) {
//   console.log(`${playerNames.length} goals were scored in total.`);
//   for (const playerName of playerNames) {
//     console.log(playerName);
//   }
// }
// printGoals('Player1', 'Player2', 'Player3');
//J.S solution
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// // Task 7
// console.log(team1 < team2 ? game.team1 : game.team2);
//J.S solution
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// // Test data for Task 6
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
*/

///////////////////////////////////////
// 109. Logical Assignment Operators
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Govanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

//////////////////////////////////////////////
// // 108. The Nullish Coalescing Operator(??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// // Nullish value is only null AND undefined (NOT include 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10; // ?? works almost the same like || (OR) operator
// console.log(guestCorrect);
// console.log(guestCorrect);

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
