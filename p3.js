//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?

var common = require('./common.js');

var target = 600851475143,
    factors = [];

//600 billion, try all numbers = fail
//try all numbers but divide by that number maybe ok? - basically find factors
factors = common.getFactors(target);
console.log(target);
console.log(factors);
console.log(factors.pop());
