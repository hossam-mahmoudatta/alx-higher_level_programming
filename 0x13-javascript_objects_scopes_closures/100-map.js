#!/usr/bin/node

const list = require('./100-data');

// Pass a function to map
const map1 = list.map((value, index) => value * index);

console.log(list);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]
