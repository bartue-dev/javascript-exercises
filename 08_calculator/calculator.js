const add = function(firstValue, secondValue) {
	return firstValue + secondValue;
};

const subtract = function(firstValue, secondValue) {
  return firstValue - secondValue;
};

const sum = function(integers) {
  let sum = 0;
  for(i = 0; i < integers.length; i++){
    sum += integers[i];
  }
  return sum
};

const multiply = function(integers) {
  let result = 1;
  for(i = 0; i < integers.length; i++){
    result *= integers[i];
  }
  return result;
};

const power = function(firstValue, secondValue) {
	return Math.pow(firstValue, secondValue)
};

const factorial = function(factorial) {
	let result = 1;
  for(i = factorial; i > 0; i--){
    if(!factorial){
      result;
    }else{
      result *= i;
    }
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
