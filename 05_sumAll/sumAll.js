const sumAll = function(one, two) {
    sum = 0;
    if (typeof one === "number" && typeof two === "number"){
        if (one >= 0 && two >= 0){
            if (one < two) {
                while (one <= two) {
                    sum += one;
                    one += 1;
                }
                return sum;
            } else {
                while (one >= two) {
                    sum += one;
                    one -= 1;
                }
                return sum;

            }
        } else {
            return ("ERROR")
        }
    } else {
        return ("ERROR")
    }
};

// Do not edit below this line
module.exports = sumAll;
