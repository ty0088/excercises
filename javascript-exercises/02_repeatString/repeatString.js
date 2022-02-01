const repeatString = function(string, num) {
    
    let newStr = "";

    if (num<0) {
        return "ERROR";
    } else {
        for (i=0; i<num; i++) {
            newStr = newStr+string;
            console.log(newStr);
        }
        return newStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
