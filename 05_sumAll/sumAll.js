const sumAll = function(low, high) {
  if (typeof low !== 'number' || typeof high !== 'number') return 'ERROR'
  if (low < 0 || high < 0) return 'ERROR'
  if (low === high) return low

  let result = 0;
  for (let i = Math.min(low, high); i <= Math.max(low, high); i++) {
    result = result + i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
