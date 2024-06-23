#!/usr/bin/node

const SquareTwo = require('./5-square');

class Square extends SquareTwo {
  charPrint (character) {
    let output = '';

    if (character === undefined) {
      character = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        output += character;
      }
      console.log(output);
      output = '';
    }
  }
}

module.exports = Square;
