'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 199) {
   // Es-5 way of creating default parameters //
    // numPassenger = numPassenger || 1;
    // price = price || 199;

    const booking = {
      flightNum,
      numPassenger,
      price,
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');