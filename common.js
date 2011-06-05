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

module.exports = {
  getFactors:getFactors,
  getFactorCounts:getFactorCounts
};
