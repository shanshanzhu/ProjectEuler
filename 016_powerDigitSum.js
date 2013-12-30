/*215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/

//initial naive solution
var powerDigitSum = function (power) {
  var digits = [1], sum = 0;
  for (var i = 0; i < power; i ++) {
    for (var j = 0; j < digits.length; j ++) {
      digits[j] = digits[j] * 2;
    }
    for (var j = 0; j < digits.length; j ++) {
      if (digits[j] >= 10) {
        var nextDigit = Math.floor(digits[j] / 10);
        digits[j] = digits[j] % 10;
        digits[j + 1] = j === digits.length - 1 ? nextDigit : digits[j + 1] + nextDigit;
      }
    }
  }

  for (var k = 0; k < digits.length; k ++) {
    sum += digits[k];
  }
  return sum;

};
powerDigitSum(1000);