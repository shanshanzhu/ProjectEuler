/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var largestPalindrom = function (n) {
  var i, j, startA = 0, startB = 0, max = 0;
  for ( i = n; i >= startA; i --) {
    for ( j = i; j >= startB; j --) {
      if ( isPalindrom(i * j) && i * j > max) {
        startB = j;
        startA = j;
        max = i * j;
        break;
      }
    }
  }
  return max;
};

var isPalindrom = function(n) {
  var str = n + '';
  return str === str.split('').reverse().join('');
};