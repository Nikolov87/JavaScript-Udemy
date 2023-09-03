// 👀 270. An Overview of Modern JavaScript Development
// 👀 271. An Overview of Modern in JavaScript
// 👀 272. Exporting and Importing in ES6 Modules

// Importing modul
// import { addToCart, totalPrice as price, qt } from './shoppingCard.js';
// addToCart('bread', 5); // outpust is: 5 bread added to cart
// console.log(price, qt);
// for changing name of import's fusrt write 'totalPrice as price'
// and the new name will be just price
console.log('Importing module');

// import * as ShoppingCart from './shoppingCard.js';
// ShoppingCart.addToCart('bread', 5); // 5 bread added to cart
// console.log(ShoppingCart.totalPrice); // 2.37

// Default exports - if you need to export one thing per modul

// ALL OF THEM IN THE SAME TIME just after the , comma
// import add, { addToCart, totalPrice as price, qt } from './shoppingCard.js';
// BUT THIS WE CAN'T DO IT 👆 bad practic

import add from './shoppingCard.js'; // and even changing the name to 'add'
import { addToCart } from './shoppingCard.js';
add('pizza', 2); // output: 2 pizza added to cart
add('berad', 3);
add('apples', 5);

// 👀 173. Top-Level await(ES2022)
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
*/
// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

// 👀 174. The Module Pattern

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 2.37;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

// 👀 175. CommonJS Modules
// --------------- !!!!!!!!!! -------- Using in nodeJS 👇
// Export
/*
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };
  
  // Import
  const { addTocart } = require('./shoppingCart.js');
  */

// 👀 276. A Brief Introduction to the Command Line
// 👀 277. Introduction to NPM

// import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

// import { sendJSON } from '../../18-forkify/final/src/js/helpers';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { logedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.logedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// 👀 278. Bundling With 💥Parcel💥 and NPM Scripts

if (module.hot) {
  module.hot.accept();
}

// 👀 279. Configuring Babel and Polyfilling

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const petar = new Person('Petar');

onsole.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';

// 👀 280. Review: Writing Clean and Modern JavaScript
// test after clone
