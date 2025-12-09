"use strict";

function getTshirtNumber(numOne, numTwo) {
  let result = 0;

  for (let i = numOne; i <= numTwo; i++) {
    if (i % 6 === 0) result++;
  }

  return result;
}

console.log(getTshirtNumber(1, 13));
