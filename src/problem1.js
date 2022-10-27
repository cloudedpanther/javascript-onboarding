function problem1(pobi, crong) {
  if (isException(pobi) || isException(crong)) return -1;

  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  return pobiScore !== crongScore ? (pobiScore > crongScore ? 1 : 2) : 0;
}

function isException(pages) {
  if (isNaN(pages[0]) || isNaN(pages[1])) return true;
  else if (pages[0] <= 1 || pages[0] >= 400 || pages[1] <= 1 || pages[1] >= 400)
    return true;
  else if (pages[0] % 2 === 0 || pages[1] % 2 !== 0) return true;
  else if (pages[0] + 1 !== pages[1]) return true;
  else return false;
}

function sumDigits(pageNumber) {
  let sum = 0;
  let tmp = pageNumber;
  while (tmp > 0) {
    sum += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  return sum;
}

function multiplyDigits(pageNumber) {
  let product = 1;
  let tmp = pageNumber;
  while (tmp > 0) {
    product *= tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  return product;
}

function getScore(pages) {
  return Math.max(
    sumDigits(pages[0]),
    sumDigits(pages[1]),
    multiplyDigits(pages[0]),
    multiplyDigits(pages[1])
  );
}

module.exports = problem1;
