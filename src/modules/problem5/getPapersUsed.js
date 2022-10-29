function getPapersUsed(money, papers, index) {
  if (index === papers.length) return [];
  return [Math.floor(money / papers[index]), ...getPapersUsed(money % papers[index], index + 1, papers)];
}

module.exports = getPapersUsed;
