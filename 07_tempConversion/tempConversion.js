const convertToCelsius = function(fahrenheit) {
  let celsius;
  // °C = (°F - 32) × 5/9
  celsius = (fahrenheit - 32) * 5 / 9;
  // + to omit *.0 when necessary
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9 / 5 + 32;
  // + to omit *.0 when necessary
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
