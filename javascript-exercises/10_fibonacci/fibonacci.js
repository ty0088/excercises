const fibonacci = function(num) {

    let checkNum = 0;
    let fNum = 0;
    let fNumPrev = 0;
    let fNumTemp = 0;

    if (typeof(num === "string")) {
        checkNum = parseInt(num);
    } else if (typeof(num === "number")) {
        checkNum = num;
    }

    if (checkNum < 0) {
        return "OOPS";
    }

    for (let i = 1; i<=checkNum; i++) {
        if (i===1 || i===2) {
            fNum = 1;
            fNumPrev = 1;
        } else {
            fNumTemp = fNum;
            fNum = fNum + fNumPrev;
            fNumPrev = fNumTemp;
        }
    }

    return fNum;


};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
