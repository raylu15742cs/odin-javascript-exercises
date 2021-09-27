const repeatString = function(string, num) {
    i = 1;
    newstring = "";
    if (num >= 0){
        while ( i <= num) {
            newstring += string;
            i += 1;
        }
        return newstring;
    } else {
        error = "ERROR";
        return error;
    }
};

// Do not edit below this line
module.exports = repeatString;
