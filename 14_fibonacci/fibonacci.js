const fibonacci = function(position) {
    Number(position);
    let arrSecuence = [0, 1];
    if (position < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i <= position; i++) {
        let lastElement = arrSecuence.pop();
        let penultimateElement = arrSecuence.pop();
        let secuence = penultimateElement + lastElement;
        arrSecuence.push(penultimateElement, lastElement, secuence);
    };
    };
    return arrSecuence[position];
};

// Do not edit below this line
module.exports = fibonacci;
