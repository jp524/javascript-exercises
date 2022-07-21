const palindromes = function (string) {
  const stringNoPunc = string.replace(/\W|\s/g, "").toLowerCase();
  const l = stringNoPunc.length;
  for (let i = 0; i < l / 2; i++) {
    if (stringNoPunc[i] !== stringNoPunc[l - 1 - i]) {
      return false;
    };
  };
  return true;
};

// Do not edit below this line
module.exports = palindromes;
