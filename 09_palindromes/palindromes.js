const palindromes = function (str) {
  const regx = /[\W_]/g;
  let newStr = str.toLowerCase().replace(regx, "");
  return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
