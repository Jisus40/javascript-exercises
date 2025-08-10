const convertToCelsius = function(tempToConvert) {
    let tempConverted = (tempToConvert - 32) * (5 / 9);
    let tempRounded = tempConverted.toFixed(1);
    return parseFloat(tempRounded);
};

const convertToFahrenheit = function(tempToConvert) {
    let tempConverted = (tempToConvert * (9 / 5)) + 32;
    let tempRounded = tempConverted.toFixed(1);
    return parseFloat(tempRounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
