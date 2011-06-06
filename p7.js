//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
//What is the 10001st prime number?
//answer: 104743

var common = require('./common.js');
var numPrimes = 0;
var ith = 10001;

var i = 0;
while(1){
  ++i;
  if(common.getPrimeFactors(i).length === 1){
    numPrimes += 1;
  }
  if(numPrimes === ith){
    console.log(ith + 'th prime: ' + i);
    break;
  }
}
