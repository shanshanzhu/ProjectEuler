/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/
var getDivisorSum = function(n) {

  var limit = n, total = 1;
  for (var i = 2; i < limit; i ++) {
    if (n % i === 0) {
      limit = n / i;
      total += i;
      total += limit;
    }
  }
  return total;
};
var getAmicableNumber = function (n) {
  if (typeof n !== 'number' || n <= 1) return 0;
  var counted = {}, total = 0, sum, amicalSum;
  for (var i = 2; i < n; i ++) {
    if (counted[i]) continue;
    sum = getDivisorSum(i);
    counted[i] = true;
    counted[sum] = true;
    if (sum < n && sum !==i && getDivisorSum(sum) === i) {
      total += i;
      total += sum;
      console.log(i, sum)
    }
  }
  return total;
};