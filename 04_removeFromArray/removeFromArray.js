const removeFromArray = function(array, ...args) {
  
  function keepIfNoMatch(arrayEl) {
    for (const arg of args) {
      if (arrayEl === arg) {
        return false;
      }
    }
    return true;
  }

  return array.filter(keepIfNoMatch);
};

// Do not edit below this line
module.exports = removeFromArray;
