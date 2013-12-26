/*Find the greatest product of five consecutive digits in the 1000-digit number.
*/

/*Conseutive digits are just 5 closely neighbored digit
well the product is the multiplication of them*/
var largestProductInSeries = function (str) {
  var max = 0, i, j, product = 1;
  for ( i = 0; i < str.length - 4; i++) {
    for ( j = i; j < i + 5; j ++) {
      product *= str[j];
    }
    max = product > max ? product : max;
    product = 1;
  }
  return max;
};



/*Intepreting consecutive digit as 1,2,3,4,5
A totally different intepretation of the question!!
*/

var largestProductInSeries = function (str) {
  var max = 0, check;
  for(var i = 0; i < str.length - 4; i ++) {
    //condition1: only compare one digit;
    //condition2: compare two digits once;
    //condition3: compare two digits twice;
    for (var j = i; j < i + 4;  j ++) {
      var diff = str[j + 1] - str[j];
      if (j === i) {check = diff; }
      if (diff !== check) { break;}
    }
    if (j === i + 4) {
      var fiveDigits = str.slice(i, j+1);
      max = fiveDigits > max ? fiveDigits : max;
    }
  }
  return max;
};

var largestProductInSeries = function (str) {
  var max = 0, check, condition1,condition2, condition3;
  for(var i = 0; i < str.length - 4; i ++) {
    //condition1: only compare one digit;
    //condition2: compare two digits once;
    //condition3: compare two digits twice;
    if (2 * str[i+1] === +str[i] + +str[i+2] && 2 * str[i+ 2] === +str[i+1] + +str[i+3] && 2 * str[i+3] === +str[i+2] + +str[i+4]) {      condition1 = true;
    }

    if (2 * str[i+1] === str[i] + str[i+2] && str[i + 3].concat(str[i+4]) - str[i + 1] === 2*str[i+2]) {
      condition2 = true;
    }
    if (2 * str[i + 1].concat(str[i+2]) === str[i + 3].concat(str[i+4])- str[i]) {
      condition3 = true;
    }

    if (condition1 || condition2 || condition3) {
      var fiveDigits = str.slice(i, i + 5);
      console.log(fiveDigits);
      max = fiveDigits > max ? fiveDigits : max;
    }
    condition1 = false;
    condition2 = false;
    condition3 = false;

  }
  return +max;
};


var a = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

largestProductInSeries(a);