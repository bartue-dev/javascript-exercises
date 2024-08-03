const repeatString = function(string, num) {
  let stringValue = string;
  const numValue = num;
  let res = '';

  if(numValue < 0){
    res += stringValue.replace("goodbye", "ERROR")
  }
  for (i = 0; i < numValue; i++){
      res += stringValue;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
