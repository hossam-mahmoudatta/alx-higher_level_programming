#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (((w || h) === 0) || (isNaN(w)) || (isNaN(h))) {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
