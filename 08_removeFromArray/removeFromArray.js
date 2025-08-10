const removeFromArray = function(arrayToCheck, ...elementToDelete) {
    return arrayToCheck.filter(elemento => !elementToDelete.includes(elemento));
};

// Do not edit below this line
module.exports = removeFromArray;
