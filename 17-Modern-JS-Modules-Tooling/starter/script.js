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
add('pizza', 2); // output: 2 pizza added to cart
