/**
 * @param {string[]} strs
 * @return {string}
 */

/**
 * 方法一：比较简单粗暴，由于需要获取所有字符串的公共前缀，可选择其中一个字符串作为标准，让其余字符串与其对比，找到其公共字符串即可
 */
var longestCommonPrefix = function(strs) {
  var commonChars = [];
  var temp = 0;
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }

  var pivotStr = strs[0];
  var flag = true;
  for (var i = 0; i < pivotStr.length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (pivotStr[i] !== strs[j][i]) {
        flag = false;
        break; 
      }
    }
    if (!flag) {
      break;
    } else {
      commonChars.push(pivotStr[i]);
    }
  }
  return commonChars.join('');
}

/**
 *  方法二：先对字符串进行排序，再用第一个字符串与最后一个字符串进行对比即可
 *  时间复杂度为 O(nlogn * m)
 */
var longestCommonPrefix2 = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }

  strs.sort();
  var s1 = strs[0];
  var sn = strs[strs.length - 1];
  let i = 0;
  while(s1[i] === sn[i] && i < s1.length && i < sn.length) {
    ++i;
  }
  return s1.slice(0, i);
}

var strs = ['abcdefg', 'abcdef', 'abcd', 'abcd'];

console.log(longestCommonPrefix2(strs));
