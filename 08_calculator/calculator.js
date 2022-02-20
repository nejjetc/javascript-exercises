const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let total = 0;

  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
  }

  return total;
};

const multiply = function (array) {
  let total = 0;
  if (array.length > 0) {
    total = 1;
    for (let i = 0; i < array.length; i++) {
      total *= array[i];
    }
  }
  return total;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  return n === 0 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
