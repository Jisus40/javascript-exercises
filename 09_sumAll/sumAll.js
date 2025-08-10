const sumAll = function(begining, end) {
    let sumOfNumber = 0;
    if (begining < 0 || typeof begining === "string" || !Number.isInteger(begining) || typeof begining === "array" || end < 0 || typeof end === "string" || !Number.isInteger(end) || typeof end === "array") {
        sumOfNumber = "ERROR";
    }
    else if (begining < end) {
    for (let i = begining; i <= end; i++) {
        sumOfNumber += i;
    };
    } else if (begining > end) {
        for (let i = end; i <= begining; i++) {
        sumOfNumber += i;
    };
    } 
    return sumOfNumber;
};

// Do not edit below this line
module.exports = sumAll;
