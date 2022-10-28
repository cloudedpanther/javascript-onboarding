function countByAllDigits(digitLevel) {
  if (digitLevel === 1) return 3;
  return countByAllDigits(digitLevel - 1) * 9 + Math.pow(10, digitLevel - 1) * 3;
}

module.exports = countByAllDigits;
