//jshint esversion: 6
// Req. 3 b
let arrAvg = arr => {
  let sum = 0,
    avg;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  avg = sum / arr.length;
  return avg;
};

//Req. 3 c
let arrMax = arr => {
  let maxNum = 0;
  arr.forEach((index, i) => {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  });
  return maxNum;
};
