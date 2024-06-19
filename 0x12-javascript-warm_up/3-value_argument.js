#!/usr/bin/node
const args = process.argv.slice(2);
const argsLength = args.length;
argsLength < 1 ? 'No argument' : console.log(args);
// console.log(args);
