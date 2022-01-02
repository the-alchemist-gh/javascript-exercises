const removeFromArray = function(...myArray) {
  const malikArray = myArray[0];
  const newMyArray = [];
  malikArray.forEach((item) => {
    if (!myArray.includes(item)){
      newMyArray.push(item);
    }
  });
  return newMyArray;
};

// Do not edit below this line
module.exports = removeFromArray;
