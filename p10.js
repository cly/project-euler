//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
//Find the sum of all the primes below two million.
//
//answer: 142913828922

var common = require('./common.js');
var MAX = 2000000;
var primes = [];
var i, ii, j;

for(var i = 2, ii = MAX; i < ii; ++i){
  primes[i] = i;
}

for(var i = 2, ii = MAX; i < ii; ++i){
  if(typeof primes[i] === 'undefined'){
    continue;
  }
  j = i << 1;
  while(j < MAX){
    delete primes[j];
    j += i;
  } 
}

console.log(primes.reduce(function(p, c){ return p + c; }, 0));
