const sumAll = function (a, b) {
  function isNumber(input) {
    if (+Number(input) === input) {
      return true;
    } else {
      return false;
    }
  }

  if (isNumber(a) && isNumber(b) && a > -1 && b > -1) {
    let sum = 0;
    let min = a;
    let max = b;

    if (a > b) {
      min = b;
      max = a;
    }

    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
