#!/usr/bin/node

const list = require('./100-data').list;

// Pass a function to map
const map1 = list.map((value, index) => value * index);

console.log(list);
console.log(map1);
