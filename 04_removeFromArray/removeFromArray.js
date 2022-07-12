const removeFromArray = function(array, toRemove) {
  let index = array.indexOf(toRemove);

  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
