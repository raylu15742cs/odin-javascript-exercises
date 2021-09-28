const ftoc = function(deg) {
  temp = 0;
  temp = (deg - 32) * (5/9);
  temp = Math.round(temp*10) / 10;
  return temp;
};

const ctof = function(deg) {
  temp = 0;
  temp = (deg * 1.8) + 32;
  temp = Math.round(temp*10) / 10;
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
