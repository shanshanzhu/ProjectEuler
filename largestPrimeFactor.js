/*
//taking too long! need to rewrite. the time complexity is n^2, 
var largestPrimeFactor = function(num){
  var largestPrime = 1;
  if (num <= 2) {return num;}
  var primeList = [2];

  for (var i = 2; i < num; i ++) {
    for (var j = 0; j < primeList.length; j ++) {
      if (i % primeList[j] === 0) {
        break;
      }
    }
    if (j === primeList.length) {
      primeList.push(i);
      if (num % i === 0 && i > largestPrime) {
        largestPrime = i;
      }
    }
  }
  return largestPrime;
};
//even the linear time is not satisfying.  
// this following function will cause the repl.it to break
//aim for log(n)
var largestPrimeFactor = function(num) {
  var result = [];
  var prevFactor = [];
  var max = 0;
  //O(n) to get the common factor
  for (var i = 2; i < num; i ++) {
    if (num % i === 0 && i > max) {
      // for(var j = 0; j < prevFactor.length; j ++) {
      //   if (i % j === 0) {
      //     break;
      //   }
      // }
      // if (j === prevFactor.length) {
        // result.push(i);
      // }
      max = i;
    }
  }
  // for (var k = result.length; k >=0; k--) {
  //   if (isPrime(k)){
  //     return k;
  //   }
  // }
  // return result[result.length -1];
  return max;
};
*/

// optimization
var largestPrimeFactor = function(num) {
  for (var i = 0; i < num; i ++) {
    while (num % i === 0) {
      num = num / i;
    }
  }

  return num;
};

largestPrimeFactor(600851475143);