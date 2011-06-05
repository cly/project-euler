//utility methods as a results of answer other questions

function getFactors(currTarget){
  var i = 2,
      factors = [];

  while(currTarget > 1){
    if(currTarget % i === 0){
      currTarget /= i;
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

module.exports = {
  getFactors:getFactors,
  getFactorCounts:getFactorCounts,
  isPalindrome:isPalindrome,
  sumSquares:sumSquares,
  sum:sum
};
