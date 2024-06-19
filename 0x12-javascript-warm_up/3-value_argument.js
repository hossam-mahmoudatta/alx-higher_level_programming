#!/usr/bin/node
const args = process.argv.slice(2);
// const argsLength = args.length;
if (args) {
  console.log(args);
} else {
  console.log('No argument');
}
// argsLength < 1 ? 'No argument' : console.log(args);
// console.log(argsLength);
