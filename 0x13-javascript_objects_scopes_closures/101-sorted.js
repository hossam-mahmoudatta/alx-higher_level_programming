#!/usr/bin/node

const list = require('./100-data').list;

// Pass a function to map
const modifiedList = list.map(function (value, index) {
  return value * index;
});

console.log(list);
console.log(modifiedList);
