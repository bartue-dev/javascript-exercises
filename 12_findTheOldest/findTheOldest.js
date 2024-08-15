const findTheOldest = function(oldest) {
  const date = new Date().getFullYear();
  oldest.map((item) => {
    const age = item.yearOfDeath - item.yearOfBirth || date - item.yearOfBirth;
    return item.age = age;
  });

  oldest.sort((a,b) => {
    if(a.age > b.age){
      return -1
    }else {
      return 1
    }
  })

  return oldest[0]
  
};

// Do not edit below this line
module.exports = findTheOldest;
