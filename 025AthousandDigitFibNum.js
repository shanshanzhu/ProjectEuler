var DigitFibNum = function(digitCount){
  var storage = {};
//skip case when storage[1] === undefined, and .split.length = letter count;

  for(var n = 1; true; n ++){
    if (n === 1 || n === 2) { storage[n] = '1';}
    else {
      storage[n] = stringAdd(storage[n-1],storage[n-2]);
    }
    if (storage[n].length >= digitCount) {
      break;
    }
  }

  return n;

};
var stringAdd = function(stringNum1, stringNum2) {
  var tempStr1 = stringNum1.split('').reverse();
  var tempStr2 = stringNum2.split('').reverse();
  var sum = '', r = 0;
  for (var i = 0, j = 0; i < tempStr1.length || j < tempStr2.length || r !== 0; i ++, j ++){
    var n1 = tempStr1[i] || 0;
    var n2 = tempStr2[j] || 0;
    var s = +n1 + +n2 + r;
    r = s >= 10 ? Math.floor(s / 10) : 0;
    var toAdd = s >= 10? s % 10 : s;
    sum += toAdd; 
  }
  return sum.split('').reverse().join('');
};

DigitFibNum(1000);