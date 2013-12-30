/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var pTriplet = function (limit) {
  var answer = [];
  for (var i = 1; i <= Math.floor(limit/3); i ++) {
    for(var j = i; j <= Math.floor((limit - i)/2); j ++) {
      var k = 1000 - i - j;
      if (i*i + j*j === k*k) {
        answer.push(i*j*k);
      }
    }
  }
  return answer;
};
pTriplet(1000);