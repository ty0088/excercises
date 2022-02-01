const reverseString = function(str) {

    let arr = str.split("");
    console.log(arr);
    
    arr.reverse();
    console.log(arr);

    return arr.join("");

};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
