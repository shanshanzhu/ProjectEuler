var sumEvenFib = function (limit) {
  var total = 0;
  var store = {};
  var i = 1;
  var loop = true;
  while (loop) {
    if (i === 1 || i === 2) {
      store[i] = i;
    } else {
      store[i] = store[i-1] + store[i-2];      
    }
    if (store[i] % 2 === 0) {
      total = store[i];
    }
    if (store[i] > limit) {
      loop = false;
    }
      i ++;
  }

  return total;
};

sumEvenFib(4000000);

//taking too long! need to rewrite.
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
      largestPrime = j;
    }
  }
  return largestPrime;
};

largestPrimeFactor(600851475143);