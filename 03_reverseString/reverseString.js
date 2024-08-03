const reverseString = function(str) {
  if(str === ""){
    return "";
  }
  const reverse = str.split("").reduce((acc, char) => {
    return char + acc;
  });
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
