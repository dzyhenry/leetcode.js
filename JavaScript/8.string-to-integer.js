/* link: https://leetcode.com/problems/string-to-integer-atoi/

Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

spoilers alert... click to show requirements for atoi.

Subscribe to see which companies asked this question */

/**
 * @param {string} str
 * @return {number}
 */

 // 解法一：这样做有点儿取巧，直接用了JavaScript中的parseInt函数
var myAtoi = function(str) {
  if (!str || !str.length) {
    return 0;
  }

  var res = parseInt(str);
  if (isNaN(res)) {
    return 0;
  }
  // 越界检测
  if (res > 2147483648) {
    return 2147483647;
  }
  return res;
};

// 解法二：考虑这样一个字符串应该输出什么就行了:'   -23 2324'
var myAtoi1 = function(str) {
  if (!str || !str.length) {
    return 0; 
  }

  var index = 0;
  while(str[index] === ' ') {
    ++index;
  }
  var isNegative = false;
  if (str[index] === '-') {
    ++index;
    isNegative = true;
  } else if (str[index] === '+') {
    ++index;
  }

  var res = 0;
  var temp = 0;
  while (index < str.length && str[index] >= '0' && str[index] <= '9') {
    temp = parseInt(str[index]);
    if (!isNaN(temp)) {
      res =  (res * 10 + temp);
    } else {
      break;
    }
    ++index;
  }
  res = isNegative && res !== 0 ? -res : res;

  if (res >= 2147483647) {
    res = 2147483647;
  } else if (res <= -2147483648) {
    res = -2147483648;
  }
  return res;
};
console.log(myAtoi1('  -0 323'));
