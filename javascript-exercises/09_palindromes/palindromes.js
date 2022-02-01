const palindromes = function (string) {

    let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    newString = newString.replace(/\s+/g, '');
    newString = newString.toLowerCase()
    console.log(newString);
    let stringArr = newString.split("");
    console.log(stringArr);
    let revArr = stringArr.reverse();
    console.log(revArr);
    let revString = revArr.join("")
    console.log(revString);

    if (newString === revString) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes('Animal, loots foliated detail of stool lamina.'))

// Do not edit below this line
module.exports = palindromes;
