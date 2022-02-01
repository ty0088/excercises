const findTheOldest = function(obj) {

    return obj.reduce((prev, curr) => {

        console.log("prev: "+prev);
        console.log("curr: "+curr);

        let prevDeath = 0;
        let currDeath = 0;

        if (!prev.yearOfDeath) {
            prevDeath = new Date().getFullYear();
        } else {
            prevDeath = prev.yearOfDeath;
        }

        if (!curr.yearOfDeath) {
            currDeath = new Date().getFullYear();
        } else {
            currDeath = curr.yearOfDeath;
        }

        let prevAge = prevDeath-prev.yearOfBirth;
        let currAge = currDeath-curr.yearOfBirth;
        if (currAge > prevAge) {
            return curr;
        } else {
            return prev;
        }
    });

};



// Do not edit below this line
module.exports = findTheOldest;
