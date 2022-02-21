const caesar = function (str, shift) {
  const letters = str.split("");
  let encodedString = "";
  const totalEnAlphabet = 26;

  for (let i = 0; i < letters.length; i++) {
    if (/[\W_]/.test(letters[i])) {
      encodedString += letters[i];
    } else {
      if (shift < 0) {
        return caesar(str, shift + totalEnAlphabet);
      }
      const code = str.charCodeAt(i);
      const codeWrap =
        code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;

      encodedString += String.fromCharCode(
        ((code - codeWrap + shift) % totalEnAlphabet) + codeWrap
      );
    }
  }

  return encodedString;
};

// Do not edit below this line
module.exports = caesar;
