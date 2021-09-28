const removeFromArray = function(array1, first, second, third, fourth) {
    code = "";
    const removeValue = function(array1, test) {
        let i = 0;
        while (i <= array1.length) {
            if (array1[i] === test){
                array1.splice(i,1);
                i += 1;
            } else {
                i += 1;
            }
        }
    }
    if (first != undefined) {
        removeValue(array1, first);
    }
    if (second != undefined) {
        removeValue(array1, second);
    }
    if (third != undefined) {
        removeValue(array1, third);
    }
    if (fourth != undefined) {
        removeValue(array1, fourth);
    }

    return (array1);
};

// Do not edit below this line
module.exports = removeFromArray;