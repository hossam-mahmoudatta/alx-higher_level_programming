#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    const selectedString = 'X';
    let output = '';

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        output += selectedString;
      }
      console.log(output);
      output = '';
    }
  }
}

module.exports = Rectangle;
