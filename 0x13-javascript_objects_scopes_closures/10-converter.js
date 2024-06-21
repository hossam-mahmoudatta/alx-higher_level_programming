#!/usr/bin/node

function factorial (a) {
  if (a === 0) {
    return (1);
  }

  return (factorial(a - 1) * a);
}

const arg1 = parseInt(process.argv[2]);

if (isNaN(arg1)) {
  console.log(factorial(0));
} else if (!isNaN(arg1)) {
  console.log(factorial(arg1));
}
