// What is the 10 001st prime number?
//complexity of n^2.
var nthPrime = function(n) {
  var previousPrime = [];
  for (var i = 2, count = 0; count < n; i ++) {
    for (var j = 0; j < previousPrime.length; j ++) {
      if (i % previousPrime[j] === 0) {
        break;
      }
    }
    if (j === previousPrime.length) {
      previousPrime.push(i);
      count ++;
    }
  }
  return previousPrime[n - 1];
};