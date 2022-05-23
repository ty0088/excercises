const capitilise = (string) => {
    const stringArr = string.split('');
    let firstChar = stringArr[0];
    firstChar = firstChar.toUpperCase();
    let newArr = stringArr.slice(1);
    newArr.unshift(firstChar);
    return newArr.join('');
}

capitilise('tom');

export {
    capitilise,
}