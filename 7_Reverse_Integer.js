/* link: https://leetcode.com/problems/reverse-integer/

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

*/

// 思路很简单直接，提取整数的每一位，反转，再拼凑出结果就ok了。此题leetcode上的JavaScript OJ 有bug，超过11位就出问题了。

/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var arr = [];
    var pivot = 10;
    var temp = x >= 0 ? x : -x;
    while (pivot <= temp) {
        pivot *= 10;
    }
    pivot = pivot / 10;
    var rem;
    while (temp > 0) {
        rem = Math.floor(temp / pivot);
        arr.push(rem);
        temp -= pivot * rem;
        pivot /= 10;
    }
    var res = 0;
    for (var i = arr.length - 1; i >= 0; --i) {
        res += arr[i] * Math.pow(10, i);
    }
    res = x >= 0 ? res : -res;
    return res;
};

console.log(reverse(-23));
