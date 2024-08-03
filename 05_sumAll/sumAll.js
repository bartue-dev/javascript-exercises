const sumAll = function(start,end) {
  let res = []; 

  if(!Number.isInteger(start) || !Number.isInteger(end)){
    return "ERROR"
  } else if (start < 0 || end < 0) {
    return "ERROR"
  } else if (typeof start !== "number" || typeof end !== "number") {
    return "ERROR"
  }
  for(i = start; i <= end; i++){
    res.push(i);
  }
  for(j = start; j >= end; j--){
    res.push(j);
  }
  const sum = res.reduce((acc,curr) => acc + curr, 0);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
