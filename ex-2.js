"use strict";

function countActions(stepsNum) {
  let claps = 0;
  let clicks = 0;

  for (let i = 1; i <= stepsNum; i++) {
    if (i % 10 === 0) {
      claps++;
    } else if (i % 5 === 0) {
      clicks++;
    }
  }

  return `Number of claps: ${claps}, number of clicks ${clicks} .`;
}

console.log(countActions(426));
