#!/usr/bin/node

const args = process.argv.slice(2);
let sortedArray;

if (args.length <= 1) {
  console.log(0);
} else {
  sortedArray = args.sort((a, b) => b - a);
  console.log(sortedArray[1]);
}
