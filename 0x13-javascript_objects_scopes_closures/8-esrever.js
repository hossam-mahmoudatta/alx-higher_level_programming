#!/usr/bin/node
const selectedString = 'X';
let output = '';
const arg = process.argv[2];
const intValue = parseInt(arg);

if (isNaN(intValue)) {
  console.log('Missing size');
} else if (!isNaN(intValue)) {
  for (let i = 0; i < intValue; i++) {
    for (let i = 0; i < intValue; i++) {
      output += selectedString;
      // output++;
    }
    console.log(output);
    output = '';
  }
}
