
exports.min = function min (array) {
  return (array == undefined || array.length == 0) ? 0 : Math.min(...array);
};

exports.max = function max (array) {
  return (array == undefined || array.length == 0) ? 0 : Math.max(...array);
};

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0) return 0; 
  
  let sum = 0;
  for(let i=0; i < array.length; i++) {
      sum += array[i];
  }
  return sum / array.length;
};