const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a+b,0)
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a*b)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {

  let fact = 1;

	if (a === 0) {
    return fact;
  } else {
    for (let i = 1; i<=a; i++) {
      fact *= i;
    }
    return fact;
  }
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
