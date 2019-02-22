/* link: https://leetcode.com/problems/reverse-integer/

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

*/

// 思路很简单直接，提取整数的每一位，反转，再拼凑出结果就ok了。// 注意整数溢出

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

    // 整数溢出判断
    if (res > 2147483647 || res < -2147483647) {
        res = 0;
    }
    return res;
};

// 下面这种方法显然比我高明得多，来自这里：https://leetcode.com/discuss/84344/share-my-answer
var reverse1 = function(x) {
    var res = 0;
    var temp = x;
    if (temp < 0) {
        temp = -temp;
    }
    while (temp) {
        res = res * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    res = x < 0 ? -res : res;

    // 整数溢出判断
    if (res > 2147483647 || res < -2147483647) {
        res = 0;
    }

    return res;
};

console.log(reverse1(-1233434));
