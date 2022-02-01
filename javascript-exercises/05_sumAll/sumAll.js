const sumAll = function(a, b) {

    let sum = 0;
    let max = 0;
    let min = 0;

    if (typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR";
    } else if (a<0 || b<0) {
        return "ERROR";
    }

    if (a>b) {
        max = a;
        min = b;
    } else {
        min = a;
        max = b;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;    
};

console.log(sumAll(1, 4000));

// Do not edit below this line
module.exports = sumAll;
