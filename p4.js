//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
//
//Find the largest palindrome made from the product of two 3-digit numbers.

//~900 3-digit numbers, 900 * 900 / 2 two 3-digit numbers, brute it!

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

(function(){
  var i, ii, j, jj,
      product,
      maxPalindrome = 101,
      MIN_NUM = 100,
      MAX_NUM = 999;

  for(i = MIN_NUM, ii = MAX_NUM; i <= ii; ++i){
    for(j = i, jj = MAX_NUM; j <= jj; ++j){
      product = i * j;
      if(isPalindrome(product) && product > maxPalindrome){
        console.log(i, j);
        maxPalindrome = product;
      }
    }
  }
  console.log(maxPalindrome);
})();
