// Exporting module
console.log('Exportig module');

const shippingCost = 10;
const card = [];

export const addToCart = function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 2.37;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt }; // changing the name using 'as'

// Default exports - if you need to export one thing per modul

export default function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
