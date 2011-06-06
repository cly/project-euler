
var common = require('./common.js');

var triangleNumber = (function (i, n){
  return function (cb){
    ++i;
    n += i;
    return cb.apply(null, [n]);
  };
})(0, 0);


var divisors = 0;
var numDivisors = 0;
while(numDivisors <= 5){
  divisors = triangleNumber(common.divisors);
  numDivisors = divisors.length;
}

console.log(divisors.pop());
