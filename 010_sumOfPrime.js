/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var sumPrime = function (limit) {
  var primeSum = 0;
  var primeList = [];
  for (var i = 2; i < limit; i ++) {
    for (var j = 0; j < primeList.length; j ++) {
      if (i % primeList[j] === 0) {
        break;
      }
    }
    if (j === primeList.length) {
      primeList.push(i);
      primeSum += i;
    }
  }
  return primeSum;
};
sumPrime(2000000);
//the first solution needs 691 ms for 0.2Million, and 2.4s for 0.4 million. about 1min for 2Million
/*
    if (i % 2 === 0 || i % 3 === 0) {
      continue;
    }//adding this condition still makes 2.4s for 0.4million limit!
*/

//in the second edition, try delete and forEach, the execution is way slower than the 1st method.
//3.9s for 0.1M.
var sumPrimeSieve = function (limit) {
  var primeSum = 0;
  var primeList = {};
  for (var i = 2; i < limit; i ++) {
    primeList[i] = true;
  }
  for (var i = 2; i < limit; i ++) {
    for (var j = i*i; j < limit; j += i) {
        delete primeList[j];
    }
  }

  Object.keys(primeList).forEach(function(item){
    primeSum += +item;
  })
  return primeSum;
};

//best solution so far.
var sumPrimeSieve = function (limit) {
  var primeSum = 0;
  var primeList = {};
  var a = new Date();

  for (var i = 2; i < limit; i ++) {
    primeList[i] = true;
  }
  for (var i = 2; i < limit; i ++) {
    for (var j = i*i; j < limit; j += i) {
      primeList[j] = false;
    }
  }

  for (var key in primeList) {
    if (primeList[key]) {
        primeSum += +key;
    }
  }
  var b = new Date();
  return [primeSum, b-a];
};

sumPrimeSieve(2000000);
/*
1M =>[ 37550402023, 417 ]
   
2M=> [ 142913828922, 835 ]
   
4M=> [ 544501644261, 2066 ]
/*