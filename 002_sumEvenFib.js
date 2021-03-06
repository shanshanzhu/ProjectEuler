/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
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
