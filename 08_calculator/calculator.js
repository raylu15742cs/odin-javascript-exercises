const add = function(a , b) {
	 let sum = 0;
   sum = a + b;
   return sum;
};

const subtract = function(a,b) {
	let sum = 0;
  sum = a - b;
  return sum;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => sum += element);
  return sum;
	
};

const multiply = function(array) {
  let sum = 1;
  array.forEach(element => sum *= element);
  return sum;

};

const power = function(a,b) {
	let sum = Math.pow(a,b);
  return sum;
};

const factorial = function(facts) {
  let sum = 1;
  if (facts == 0 || facts == 1){
    sum = 1;
  } 
  while (facts > 1) {
      sum *=facts;
      facts -=1;
    
  }
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
