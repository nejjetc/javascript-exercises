const fibonacci = function (input) {
  let number = parseInt(input);

  if (Number.isNaN(number)) {
    return;
  }

  if (number < 0) {
    return "OOPS";
  }

  let n1 = 0;
  let n2 = 1;
  let nextNumber = 0;

  for (let i = 1; i <= number; i++) {
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
  }

  return n1;
};

// Do not edit below this line
module.exports = fibonacci;
