const capitilise = (string) => {
    const stringArr = [...string];
    let firstChar = stringArr[0];
    firstChar = firstChar.toUpperCase();
    let newArr = stringArr.slice(1);
    newArr.unshift(firstChar);
    return newArr.join('');
}

const reverseStr = (string) => {
    let strArr = [...string];
    strArr.reverse();
    return strArr.join("");
}

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        return a / b;
    },
    multiply: (a, b) => {
        return a * b;
    },
}

const caesarCipher = (string, shift) => {

    if (shift > 26 || shift < -26) {
        throw new Error('Cannot shift by more than 26 or less than -26');
    }

    const codeShift = (code, shift) => { //function to shift a letter by determined amount
        let shiftCode = 0;
        if (code >= 65 && code <= 90) { //shift upper case letters only
            shiftCode = code + shift;
            if (shiftCode > 90) {
                shiftCode = shiftCode - 26;
            } else if (shiftCode < 65) {
                shiftCode = shiftCode + 26;
            }
        } else if (code >= 97 && code <= 122) { //shift lower case letter only
            shiftCode = code + shift;
            if (shiftCode > 122) {
                shiftCode = shiftCode - 26;
            } else if (shiftCode < 97) {
                shiftCode = shiftCode + 26;
            }
        } else {
            shiftCode = code; //do not shift anything that isn't a letter
        }
        return shiftCode;
    }

    const strArr = [...string];
    const shiftStr = strArr.map(char => char.charCodeAt())
                        .map(code => codeShift(code, shift))
                        .map(code => String.fromCharCode(code))
                        .join('');
    return shiftStr;
}

const analyseArray = (arr) => {
    const length = arr.length;
    const average = arr.reduce((prev, curr) => prev + curr, 0) / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {average, min, max, length};
}


export {
    capitilise,
    reverseStr,
    calculator,
    caesarCipher,
    analyseArray
}