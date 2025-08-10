const add = function(numb1, numb2) {
	return numb1 + numb2;
};

const subtract = function(numb1, numb2) {
	return numb1 - numb2;
};

const sum = function(arr) {
	let result = arr.reduce((acc, curr) => acc + curr, 0);
    return result;
};

const multiply = function(arr) {
    let result = arr.reduce((acc, curr) => acc * curr);
    return result;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let result = 1;
    if (number == 1 || number == 0) {
        return 1;
    } else {
        for (let i = 1; i <= number; i++) {
         result *= i;
    };
    return result;
    };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
