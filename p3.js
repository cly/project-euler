var target = 600851475143,
    currTarget = target,
    i = 2,
    factors = [];

//600 billion, try all numbers = fail
//try all numbers but divide by that number maybe ok?
while(currTarget > 1){
  if(currTarget % i === 0){
    currTarget /= i;
    factors.push(i);
  }
  else {
    ++i;
  }
}
console.log(currTarget);
console.log(factors);
console.log(factors.pop());
