'use strict';

// 128.Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengeres = 1,
  price = 200 * numPassengeres
) {
  // ES5
  //   numPassengeres = numPassengeres || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengeres,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengeres: 1, price: 200}
createBooking('LH123', 2, 700); // {flightNum: 'LH123', numPassengeres: 2, price: 700}
createBooking('LH123', 3); // {flightNum: 'LH123', numPassengeres: 3, price: 600}
createBooking('LH123', 5); // {flightNum: 'LH123', numPassengeres: 5, price: 1000}
