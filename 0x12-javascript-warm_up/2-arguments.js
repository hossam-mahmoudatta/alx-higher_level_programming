#!/usr/bin/node
const args = process.argv.slice(2);
const argsLength = (
  args.length < 1
    ? 'No argument'
    : args.length === 1
      ? 'Argument found'
      : 'Arguments found'
);
console.log(argsLength);
// console.log(args);
