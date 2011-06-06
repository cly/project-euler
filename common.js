//utility methods as a results of answer other questions

function getPrimeFactors(nOrig){
  var i = 2,
      factors = [],
      n = nOrig;

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

function _incrComb(comb){
  return false;
/*
  while(index > 0){
    if(comb[index] < ii - 1){
      comb[index] += 1;
    }
    else{
      --index;
    }
  }
*/
}

function divisors(n){
  var factors = getPrimeFactors(n);
  var i, ii;
  var result = [];
  for(i = 0, ii = factors.length; i < ii; ++i){
    result.push(factors[i]);
  }
  if(result[0] !== 1){
    result.unshift(1);
  }
  if(result[result.length - 1] !== n){
    result.push(n);
  }
  console.log(result);
  for(i = 2, ii = factors.length; i < ii; ++i){
    var comb = [];
    var index = i - 1;

    //initialize
    for(var j = 0, jj = i; j < jj; ++j){
      comb[j] = j;
    }

    var more = true;
    while(more){
      more = _incrComb(comb);
      console.log(comb);
      //use comb
    }
  }
  console.log('hh', n, result);

  return result;
  
  //console.log(n, n, factors);
/*
  var result = [];
  for(var i = 1, ii = n; i <= ii; ++i){
    if(n % i === 0){
      result.push(i);
    }
  }
  return result;
*/
}

module.exports = {
  getPrimeFactors:getPrimeFactors,
  getFactorCounts:getFactorCounts,
  isPalindrome:isPalindrome,
  sumSquares:sumSquares,
  sum:sum,
  isInt:isInt,
  isPrime:isPrime,
  divisors:divisors
};
