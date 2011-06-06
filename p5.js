//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//the prime factorization of 2520 can be combined to compute all the numbers between 1 and 10
//answer: 232792560

var common = require('./common.js');

(function(){
  var MIN = 1,
      MAX = 20,
      factorCounts = {},
      factors,
      factor,
      tempFactorCounts;
  for(var i = MIN, ii = MAX; i <= ii; --ii){
    factors = common.getPrimeFactors(ii);
    tempFactorCounts = common.getFactorCounts(factors);

    for(factor in tempFactorCounts){
      if(tempFactorCounts.hasOwnProperty(factor)){
        if(typeof factorCounts[factor] === 'undefined' ||
           factorCounts[factor] < tempFactorCounts[factor]){
          factorCounts[factor] = tempFactorCounts[factor];
        }
      }
    }
    console.log(tempFactorCounts);
  }
  console.log(factorCounts);

  var result = 1;
  for(factor in factorCounts){
    if(factorCounts.hasOwnProperty(factor)){
      result *= Math.pow(factor,factorCounts[factor]);
    }
  }
  console.log(result);
}());
