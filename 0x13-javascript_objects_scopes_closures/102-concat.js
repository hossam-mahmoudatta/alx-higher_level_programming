#!/usr/bin/node

// We'll use the fs functions, that are related to files
const fileSystem = require('fs');
let combinedString = '';

combinedString = combinedString.concat(fileSystem.readFileSync(process.argv[2]));
combinedString = combinedString.concat(fileSystem.readFileSync(process.argv[3]));

fileSystem.writeFileSync(process.argv[4], combinedString);
