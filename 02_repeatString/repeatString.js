const repeatString = function(a,b) {
  let firstWord = toString(a);
  let secondNumber = parseInt(b);
  if (b<0){
    return 'ERROR'
  }
  if (b===0){
    return ''
  }
  return a.repeat(b);
};

// Do not edit below this line
module.exports = repeatString;
