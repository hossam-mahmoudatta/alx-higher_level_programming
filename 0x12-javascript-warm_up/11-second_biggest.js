#!/usr/bin/node

function sortingInput (...args) {
  // args = process.argv.slice(2);

  if (args.length <= 1) {
    console.log(0);
    return 0;
  } else {
    const sortedArray = args.sort((a, b) => b - a);
    return sortedArray;
  }
}

const argus = process.argv.slice(2);

console.log(sortingInput(...argus)[1]);
