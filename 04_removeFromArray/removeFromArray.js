const removeFromArray = function(numArray, removeNum) {

    for (let x=1; x<arguments.length; x++){

        for (let i=numArray.length-1; i>=0; i--){
            if (numArray[i] === arguments[x]){
                numArray.splice(i,1);
            }
        }
    }
    return numArray;

};

// Do not edit below this line
module.exports = removeFromArray;
