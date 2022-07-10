const repeatString = function (string, n) {
  let result = "";

  if (n < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < n; i++) {
      result = result + string;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
