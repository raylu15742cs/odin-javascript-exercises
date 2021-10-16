const getTheTitles = function(value) {
    let i = 0;
    let result = [];
    while (value.length > i) {
        result.push (value[i].title);
        i += 1;
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
