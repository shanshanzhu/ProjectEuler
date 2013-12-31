/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/
var longestCollatzSequence = function(limit) {
  var pastChain = {}, max = [1,1];
  for (var i = 1; i <= limit; i++) {
    var j = i;
    var count = 1;
    while(j > 1) {
      j = j % 2 === 0 ? j/2 : 3 * j + 1;
      if (pastChain[j]) {
        pastChain[i] = pastChain[j] + count;
        max = evaluate(max, pastChain[i], i);
        break;
      } else {
        count ++;
      }
    }
    if (j === 1) {
      pastChain[i] = count;
      max = evaluate(max, pastChain[i], i);
    }
  }
  return max[1];
};

var evaluate = function(max, chainCount, startingNum) {
  if (max[0] < chainCount) {
    max[0] = chainCount;
    max[1] = startingNum;
  }
  return max;
}

longestCollatzSequence(1000000);