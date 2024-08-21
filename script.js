'use strict';

// -------- default parameters --------------------------------

// const bookings = [];
// const createBooking = function (flightNum, numPassenger = 1, price = 199) {
//   // Es-5 way of creating default parameters //
//   // numPassenger = numPassenger || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('H123', 2, 800);
// createBooking('H123', undefined, 500); // if you dont want to specify the paramter argument and want it to take as per default parameters then just set it to 'undefined'
 
// ------ // passing argument works ---

// const flight = 'LH123';
// const nehal = {
//     name: 'Nehal Shaikh',
//     passport: 78946123
// }
// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH786'
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 78946123) {
//         alert('chek in')
//     } else { alert('wrong passport') };
// }
// checkIn(flight, nehal);

// ------------- higher order functions and first class functions --------------------



