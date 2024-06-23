#!/usr/bin/node

function converter (base) {
  return function (inputNumber) {
    return inputNumber.toString(base);
  };
}

module.exports = {
  converter
};
