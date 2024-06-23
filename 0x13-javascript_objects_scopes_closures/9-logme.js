#!/usr/bin/node

let counter = 0;

function logMe (item) {
  counter++;
  console.log(counter + ': ' + item);
}

module.exports = {
  counter,
  logMe
};
