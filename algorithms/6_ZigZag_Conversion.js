/* link: https://leetcode.com/problems/zigzag-conversion/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

// 方法：此题解法很直观，根据numRows可以直接算出每一行的间隔，而且除了第一行和最后一行，两个间隔的和固定。
// 有numRows行，找到规律即可。

/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var res = ''; var len = s.length;
    if (len <= numRows) {
        return s;
    }
    var gap;
    var index;
    var flipFlap = 2 * (numRows - 1);
    if (flipFlap === 0) {
        return s;
    }
    for (var i = 0; i < numRows; i++) {
        res += s[i];
        gap = 2 * (numRows - i - 1);
        if (gap === 0) {
            gap = flipFlap;
        }
        index = i + gap;
        while (index < len) {
            res += s[index];
            gap = (flipFlap - gap) === 0 ? flipFlap : flipFlap - gap;
            index += gap;
        }
    }
    return res;
};
