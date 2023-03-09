const convertToCelsius = function(degF) {
  degC = (degF - 32) * 5/9;
  return parseFloat(degC.toFixed(1));   // round to 1 decimal
};

const convertToFahrenheit = function(degC) {
  degF = (degC * 9/5 + 32);
  return parseFloat(degF.toFixed(1));   // round to 1 decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
