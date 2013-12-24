

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