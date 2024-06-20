#!/usr/bin/node

const args = process.argv.slice(2);
const sortedArray = 0;

if (args.length <= 1) {
  console.log(0);
} else {
  const sortedArray = args.sort((a, b) => b - a);
  console.log(sortedArray[1]);
}
