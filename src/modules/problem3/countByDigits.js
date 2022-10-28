const countByAllDigits = require("./countByAllDigits.js");

function countByDigits(digitLevel, digit) {
  const criticalDigits = [3, 6, 9];
  let count = countByAllDigits(digitLevel - 1);
  if (criticalDigits.includes(digit)) count += Math.pow(10, digitLevel - 1);
  return count;
}

module.exports = countByDigits;
