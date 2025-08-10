const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear();
    let yearsOld = array.map(year => (year.yearOfDeath || currentYear) - year.yearOfBirth);
    let yearMoreOld = yearsOld.reduce((a, b) => (a > b ? a : b));
    let arrayFiltered = array.filter(item => ((item.yearOfDeath || currentYear) - item.yearOfBirth) === yearMoreOld);
    return arrayFiltered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
