const removeFromArray = function (array) {
  let args = Array.prototype.slice.call(arguments, 1);
  let filteredArray = "";

  filteredArray = array.filter(function (element) {
    return args.indexOf(element) < 0;
  });

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
