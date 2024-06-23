#!/usr/bin/node

module.exports = {
  esrever (list) {
    let reversedList;
    let j = 0;

    for (let i = list.length - 1; i >= 0; i--) {
      reversedList[j] = list[i];
      j++;
    }
    return (reversedList);
  }
};
