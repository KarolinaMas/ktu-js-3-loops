"use strict";

function countSnowflakes(snowflakes, seconds) {
  let result = snowflakes;

  for (let i = 0; i < seconds; i++) {
    result *= 2;
  }

  return result - snowflakes;
}

console.log(countSnowflakes(5, 3));
