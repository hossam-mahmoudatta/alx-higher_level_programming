#!/usr/bin/node

const receivedDict = require('./101-data').dict;

const modifiedDict = {};

for (const key in receivedDict) {
  const value = receivedDict[key];

  if (!modifiedDict[value]) {
    modifiedDict[value] = [];
  }
  modifiedDict[value].push(key);
}

console.log(modifiedDict);
