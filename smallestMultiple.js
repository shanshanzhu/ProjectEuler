/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/* Initial attempt */
var smallestMultiple = function(n) {
  var i, keyA, keyB, factors,multiple = 1; pool = {};
  for (i = 1; i <= n; i ++) {
    factors = findPrimeFactor(i);
    for (keyA in factors) {
      pool[keyA] = pool[keyA] > factors[keyA] ? pool[keyA] : factors[keyA]; 
    }
  }
  for (keyB in pool) {
    multiple *= Math.pow(keyB, pool[keyB]);
  }
  return multiple;
};

var findPrimeFactor = function(n) {
  var res = {};
  for (var j = 2; j <= n; j ++) {
    while (n % j === 0) {
      n /= j;
      res[j] = res[j] ? ++res[j] : 1;
    }
  }
  return res;
};

/* optimized */
var smallestMultiple = function(n) {
  var primeList = findPrime(n);
  var res = 1;
  for (var i = 0; i < primeList.length; i ++) {
    res *= Math.pow(primeList[i], Math.floor(Math.log(n)/Math.log(primeList[i])));
  }
  return res;
};

var findPrime = function(n) {
  var res = [];
  for (var i = 2; i < n+1; i ++) {
    for (var j = 0; j < res.length; j ++) {
      if (i % res[j] === 0) {
        break;
      }
    }
    if (j === res.length) {
      res.push(i);
    }
  }
  return res;
};
