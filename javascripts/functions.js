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

//Req. 3 d
let sumEvens = arr => {
  let evens = 0;
  for (let i of arr) {
    if (i % 2 == 0) {
      evens = evens + i;
    }
  }
  return evens;
};

// Req. 3 e XC
let alphaPosition = function(ch) {
  let charCode;
  charCode = ch.charCodeAt();
  return charCode;
};
