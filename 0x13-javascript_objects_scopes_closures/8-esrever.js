#!/usr/bin/node

module.exports = {
  esrever (list) {
    const reversedList = [];

    for (let i = list.length - 1; i >= 0; i--) {
      reversedList.push(list[i]);
    }
    return (reversedList);
  }
};
