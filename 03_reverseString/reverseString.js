const reverseString = function(str) {
    leng = str.length;
    let i = leng;
    reverse = "";
    while (i >= 1) {
        reverse += str[i-1];
        i--;
    }
    return reverse;
}

// Do not edit below this line
module.exports = reverseString;
