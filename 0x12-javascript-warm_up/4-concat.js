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

if (process.argv[2] && process.argv[3]) {
    console.log(process.argv[2] + 'is' + process.argv[3]);
  } else if (process.argv[2]) {
    console.log(process.argv[2] + 'is undefined');
  } else {
    console.log('undefined is undefined');
}