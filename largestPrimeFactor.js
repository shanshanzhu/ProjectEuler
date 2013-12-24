  /*
  The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
  */

// optimization
var largestPrimeFactor = function(num) {
  for (var i = 2; i < num; i ++) {
    while (num % i === 0) {
      num = num / i;
    }
  }
  return num;
};

largestPrimeFactor(600851475143);