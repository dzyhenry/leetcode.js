/*
* Given a digit string, return all possible letter combinations that the number could represent.
* A mapping of digit to letters (just like on the telephone buttons) is given below.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var digitMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
var letterCombinations = function(digits) {
  var res = [];
  letterCombinationRecursive(digits, 0, [], res);
  return res;
};

var letterCombinationRecursive = function(digits, digitIdx, accArray, res) {
  var digitStr = digitMap[digits[digitIdx]];
  if (digitIdx > digits.length - 1) {
    res.push(accArray.join(''));
    return;
  }

  for (var i = 0; i < digitStr.length; i++) {
    var nextArr = accArray.slice();
    nextArr.push(digitStr[i]);
    letterCombinationRecursive(digits, digitIdx + 1, nextArr, res);
  }
};

var letterCombinations2 = function(digits) {
  var res = [];
  for (var i = 0; i < digits.length; i++) {
    for (var j = 0; j < digitStr.length; j++) {
      var digitStr = digitMap[digits[i]];
      var acc = [];
      acc.push(digitStr[j]);
      for (var i = 0; i < Things.length; i++) {
        Things[i]
      }
    }
  }
};

console.log(letterCombinations('2345'));
