#!/usr/bin/node
const args = process.argv.slice(2);
const argsLength = args.length;
if (argsLength < 1) {
  console.log('No argument');
} else {
  console.log(args);
}
// argsLength < 1 ? 'No argument' : console.log(args);
// console.log(args);
