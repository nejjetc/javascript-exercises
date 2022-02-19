const sumAll = function (a, b) {
  let total = "";

  if (typeof a !== "number" || a < 0 || typeof b !== "number" || b < 0) {
    total = "ERROR";
  } else {
    let smallNum = a < b ? a : b;
    let largeNum = a > b ? a : b;

    if (smallNum === largeNum) {
      total = smallNum;
    } else {
      let subNum = smallNum - 1;
      // n(n + 1)/2
      total = (largeNum * (largeNum + 1)) / 2 - (subNum * (subNum + 1)) / 2;
    }
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
