const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else {
    let array = [0, 1];
    for (let i = 1; i < n; i++) {
      array.push(array[i - 1] + array[i]);
    }
    return array.pop();
  }
};

// Do not edit below this line
module.exports = fibonacci;
