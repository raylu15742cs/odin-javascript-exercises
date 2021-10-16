const fibonacci = function(fib) {
 let nums = [];
 let i = 0;
if (fib >= 0 ){
    while ( i < fib) {
        if ( i < 2){
            nums.push(1);
        } else {
            nums.push(nums[i - 1] + nums[i - 2]);
        }         
        i ++;
    }
} else {
    return ("OOPS");
}

 return nums[fib - 1];
};

// Do not edit below this line
module.exports = fibonacci;
