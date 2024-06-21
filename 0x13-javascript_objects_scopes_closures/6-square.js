#!/usr/bin/node

const Square = require('./5-square');

class Square extends Rectangle {
  charPrint(character) {
    let output = '';

    if (character = '') {
      this.print();
    } else {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          output += character;
        }
        console.log(output);
        output = '';
      }
    }
  }
}

module.exports = Square;
