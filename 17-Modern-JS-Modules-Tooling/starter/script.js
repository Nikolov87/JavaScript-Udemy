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
add('berad', 3);
add('apples', 5);

// 👀 173. Top-Level await(ES2022)
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
