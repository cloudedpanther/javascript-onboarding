const countByAllDigits = require("./countByAllDigits.js");
const countByDigits = require("./countByDigits.js");

function countAll(number) {
  if (number < 3) return 0;
  else if (number < 6) return 1;
  else if (number < 9) return 2;
  else if (number < 10) return 3;

  const criticalDigits = [3, 6, 9];
  const digitLevel = number.toString().length;
  const frontDigit = Math.floor(number / Math.pow(10, digitLevel - 1));
  const nextNumber = number % Math.pow(10, digitLevel - 1);
  let count = 0;
  for (let i = 1; i < digitLevel; i++) {
    count += countByAllDigits(i);
  }
  for (let i = 1; i < frontDigit; i++) {
    count += countByDigits(digitLevel, i);
  }
  if (criticalDigits.includes(frontDigit)) count += nextNumber + 1;
  count += countAll(nextNumber);
  return count;
}

module.exports = countAll;
