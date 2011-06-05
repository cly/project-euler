//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?

var target = 600851475143;

//600 billion, try all numbers = fail
//try all numbers but divide by that number maybe ok?
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

getFactors(target);
console.log(target);
console.log(currTarget);
console.log(factors);
console.log(factors.pop());
