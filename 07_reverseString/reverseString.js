const reverseString = function(string) {
    let stringToArray = string.split("");
    stringToArray.reverse();
    return stringToArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
