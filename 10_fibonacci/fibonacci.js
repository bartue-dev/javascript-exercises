const fibonacci = function(member) {
  let mem = Number(member)
  let fib = [0,1];
  let res;

  if(mem === 0 ){
    res = 0
  }
  if(mem === 1){
    res = 1
  }
  if(mem < 0){
    res = "OOPS"
  }
  for(i = 2; i <= mem; i++){
    fib[i] = fib[i - 2] + fib[i - 1];
    res = fib[i]
  }
  return res
};

// Do not edit below this line
module.exports = fibonacci;
