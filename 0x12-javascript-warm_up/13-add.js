#!/usr/bin/node

// I dont really understand this task

/*
  The code inside the main.js that will use from this function

  const add = require('./13-add').add;
  -> require means that it will import the 13-add file
  -> .add means it will access this function

  console.log(add(3, 5));
*/
// export function add (a, b) {
//   return (a + b);
// }

module.exports = {
  add (a, b) {
    return (a + b);
  }
};
