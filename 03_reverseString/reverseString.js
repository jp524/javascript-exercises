const reverseString = function(string) {
  let array = [];

  for (const char of string) {
    array.push(char);
  }
  array = array.reverse();
  return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
