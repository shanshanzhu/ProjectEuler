/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/
//initial solution, taking too long for 20 grid.
var latticePath = function(gridNumber){
  //only think about the move right part.
  var solution = 0;
  var goRight = function(left, depth) {
    if (left === 0 || depth === 0) {
      solution ++;
      return;
    }
    for(var i = 0; i <= left; i ++) {
      goRight(i, depth - 1);
    }
  };
  goRight(gridNumber,gridNumber);

  return solution;
};
latticePath(10);

//backtrack solution -similar to leetcode; still too slow;
var backtrack = function(m,n) {
  if (m === 0 || n === 0) {
    return 1;
  }
  return backtrack(m-1, n) + backtrack(m, n-1);
}
backtrack(20,20);

//backtrack with memoize, much faster!
var travelled = {};
var backtrack = function(m,n) {
  if (m === 0 || n === 0) {
    return 1;
  }

  if (travelled[m + ',' + n]) {
    return travelled[m + ',' + n];
  }

  solution = backtrack(m-1, n) + backtrack(m, n-1);
  travelled[m + ',' + n] = solution;
  return solution;
}
backtrack(20,20);

