/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
var factorialDigitSum = function (limit) {
  var sums = [1], r = 0;
  for (var i = 1; i <= limit; i++) {
    for (var j = 0; j < sums.length; j ++) {
      sums[j] = sums[j] * i + r;
      r = 0;
      if (sums[j] >= 10) {
        r = Math.floor(sums[j] / 10);
        if (j === sums.length - 1) {
          sums.push(0);
        }
      }
      sums[j] = sums[j] % 10;
    }
  }
  var total = 0;
  sums.forEach(function(item) {
    total += item;
  });
  return total;

};
factorialDigitSum(100);