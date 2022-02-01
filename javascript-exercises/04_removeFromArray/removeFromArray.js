const removeFromArray = function(arr, ...args) {

    console.log(arr +" , "+ args);

    let checkArgs = Array.from(args);
    console.log(arr);
    console.log(checkArgs);

    for (let i=0; i<arguments.length; i++) {
        
    console.log("checking arg: "+args[i]);

        for (let j=0; j<arr.length; j++) {
            
                console.log(arr[j]+" ---- "+args[i]);
            if (arr[j] === args[i]) {
                console.log(args[i]+" found and removed");
                arr.splice(j, 1);
            }

        }

    }


    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
