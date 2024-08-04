const leapYears = function(year) {

const four = year % 4 === 0;
const notOneHundred = year % 100 !== 0;
const oneHundred = year % 100 === 0;
const fourHundred = year % 400 === 0;

if(four && notOneHundred || oneHundred && fourHundred){
  return true;
}else {
  return false
}
};

// Do not edit below this line
module.exports = leapYears;
