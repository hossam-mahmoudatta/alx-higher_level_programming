#!/usr/bin/node
const selectedString = ['C is fun'];

const arg = process.argv[2];
const intValue = parseInt(arg);

if (isNaN(intValue)) {
  console.log('Missing number of occurrences');
} else if (!isNaN(intValue)) {
  for (let i = 0; i < intValue; i++) {
    console.log(selectedString[i]);
  }
}
