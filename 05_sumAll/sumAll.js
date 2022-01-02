const sumAll = function(start,finish) {
  let value = 0;

  if(start > finish){
    for (let i= finish; i<start+1; i++){
      value = value + i;
    }
    return value;
  } else if(start < 0 || finish < 0 || !Number.isInteger(start) || !Number.isInteger(finish)){
      return 'ERROR';
  }
  else {
  for (let i= start; i<finish+1; i++){
    value = value + i;
  }
  return value;
}
};

// Do not edit below this line
module.exports = sumAll;
