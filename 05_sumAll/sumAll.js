const sumAll = function (firstInt, lastInt) {
    if (typeof firstInt !== 'number' || typeof lastInt !== 'number' || firstInt < 0 || lastInt < 0) {
        return "ERROR";
    }
    if (lastInt < firstInt) {
        // Swap the values between variables
        [firstInt, lastInt] = [lastInt, firstInt];
    }
    let sumInt = 0;
    for (let i = firstInt; i <= lastInt; i++) {
        sumInt += i;
    }
    return sumInt;
};

// Do not edit below this line
module.exports = sumAll;
