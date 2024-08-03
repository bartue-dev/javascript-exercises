const removeFromArray = function(first, ...second) {
  return first.filter((num) => {
   return !second.includes(num)
  })
};

// Do not edit below this line
module.exports = removeFromArray;
