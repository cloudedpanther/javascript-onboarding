function countToLevel(level) {
  if (level < 1) return -1;

  const clapsToLevel = [3];
  for (let i = 1; i < level; i++) {
    clapsToLevel.push(10 * clapsToLevel[i - 1] + 3 * Math.pow(10, i));
  }
  return clapsToLevel;
}

module.exports = countToLevel;
