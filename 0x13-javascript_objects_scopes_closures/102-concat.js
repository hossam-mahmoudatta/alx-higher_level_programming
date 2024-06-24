#!/usr/bin/node

// We'll use the fs functions, that are related to files
const fileSystem = require('fs');

const firstArgument = fileSystem.readFileSync(process.argv[2]).toString();
const secondArgument = fileSystem.readFileSync(process.argv[3]).toString();

fileSystem.writeFileSync(process.argv[4], firstArgument + secondArgument);
