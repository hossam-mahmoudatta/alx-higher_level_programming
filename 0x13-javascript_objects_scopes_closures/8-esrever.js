#!/usr/bin/node

module.exports = {
  esrever (list) {
    let reversedList;

    for (let i = list.length - 1; i >= 0; i--) {
      reversedList[i] = list[i];
    }
    return (reversedList);
  }
};
