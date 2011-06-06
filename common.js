//utility methods as a results of answer other questions

function getFactors(n){
  var i = 2,
      factors = [];

  while(n > 1){
    if(n % i === 0){
      n /= i;
      factors.push(i);
    }
    else {
      ++i;
    }
  }
  return factors;
}

function getFactorCounts(factors){
  var factorCounts = {};
  for(var i = 0, ii = factors.length; i < ii; ++i){
    if('undefined' === typeof factorCounts[factors[i]] ){
      factorCounts[factors[i]] = 0;
    }
    ++factorCounts[factors[i]];
  }
  return factorCounts;
}

var isPalindrome = function isPalindrome(n){
  var i, l;
  n += '';
  for(i = 0, l = n.length - 1; i <= l - i; ++i){
    if(n[i] !== n[l - i]){
      return false;
    }
  }
  return true;
};


function sumSquares(n){
  var sum = 0;
  for(var i = 1, ii = n; i <= ii; ++i){
    sum += Math.pow(i, 2);
  }
  return sum;
}

function sum(n){
  var s = 0;
  for(var i = 1, ii = n; i <= ii; ++i){
    s += i;
  }
  return s;
}

function isInt(n){
  if(!isNaN(n) && parseFloat(n, 10) === parseInt(n, 10)){
    return true;
  }
  return false;
}

function isPrime(n){
  if(typeof n === 'undefined'){
    return false;
  }
  if(n < 2){
    return false;
  }
  var i = 2;
  var max = n/2;
  while(i <= max){
    if(n % i === 0){
      return false;
    }
    ++i;
  }
  return true;
}

module.exports = {
  getFactors:getFactors,
  getFactorCounts:getFactorCounts,
  isPalindrome:isPalindrome,
  sumSquares:sumSquares,
  sum:sum,
  isInt:isInt,
  isPrime:isPrime
};
