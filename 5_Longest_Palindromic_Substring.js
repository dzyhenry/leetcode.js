/* link: https://leetcode.com/problems/longest-palindromic-substring/
 *Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, 
 *and there exists one unique longest palindromic substring.
 */

/* 方法一：这可能是最容易想到的办法: 
 * 1. 遍历字符串，以每个字符为中心向两边扩展，寻找以该字符为中心的最长回文
 * 2. 需要注意的是对于偶数长度的回文和奇数长度的回文应当分别处理
 * 3. 时间复杂度需要O(n^2)
 */
var longestPalindrome1 = function(s) {
    var i, j, maxLength, resIndex;
    maxLength = 1, resIndex = 0;
    for (i = 0; i < s.length; i++) {
        j = 1;
        while(s[i-j] !== undefined && s[i+j] !== undefined && s[i-j] === s[i+j]) {  // for odd
            ++j;
        }
        if (2*j-1 > maxLength) {
            maxLength = j * 2 - 1;
            resIndex = i - j + 1;
        }

        j = 0;
        while(s[i-j] !== undefined && s[i+j+1] !== undefined && s[i-j] === s[i+j+1]) {  // for even
            ++j;
        }
        if (2*j > maxLength) {
            maxLength = j * 2;
            resIndex = i - j + 1;
        }
    }
    return s.substr(resIndex, maxLength);
};

/* 方法二：来自著名的Manacher算法(https://en.wikipedia.org/wiki/Longest_palindromic_substring)
 * 1. 我觉得这个方法最巧妙的地方是通过构造一个新字符串解决了回文中奇数偶数异构的问题，统一了解决方式。
 * 2. 然后我们就可以用动态规划解决问题了。我们现在考虑计算新字符串中的最长回文，原字符串与其有一定对应关系，解决了新字符串中的问题，原问题就好办了。
 * 3. 设p[i]为在新字符串中以i为中心的最大回文半径；mx为当前已经计算的回文字串中最右边的index（也就是目前回文扩展到的向右最远的地方), pos为mx对应的回文中心。
 * 4. 我们要计算的以下一个字符(index)为中心的回文肯定是在pos的右边的，有两种情况1.pos < index < mx 2.pos < index >= mx
 * 5. 当pos < index < mx时，在以pos为对称轴,index为右边界必有一个j，使得0<=j<pos，利用回文串的对称性,可以以p[j]的长度为基础来计算p[index]，这里就是用动态规划省去的
 * 时间复杂度。
 * 6. 对于第二种情况，pos < index >= mx时，就直接老老实实从中心向两边扩展就ok了。
 * 7. 记得每次更新mx和pos。
 *
 * 上面可能没讲明白，可以看这里：http://articles.leetcode.com/2011/11/longest-palindromic-substring-part-ii.html
 *
 * 为什么时间复杂度是O(n)呢？
 * 原因是这样的：表明上看起来，方法一和方法二基本套路是一致的，都是一个for循环，依次以没个字符为中心，向两边扩展最长回文。
 * 然而，Manacher算法，在计算以每一个字符为中心的回文字符串时，是基于之前计算过的回文，且在mx之内（左边）的字符是不会重复比较的。
 * 总之，比较次数仅仅是mx向外扩展时比较的次数。所以时间复杂度是O(n)。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var temp = [];
    var i, j;
    for(i=0, j=0; i < s.length; ++i) {
        temp[j++] = '#';
        temp[j++] = s[i];
    }
    temp[j] = '#';

    var p = [];
    var mx = 0;
    var pos = 0;
    var index = 0;

    var maxLength = 1, maxLengthIndex = 0;

    p[0] = 1;
    for (index = 1; index < temp.length; ++index) {
        if (index > mx) {
            p[index] = 1;
        } else {
            p[index] =  min(p[pos*2 - index], mx - index);
        }

        while(temp[index+p[index]] !== undefined && temp[index-p[index]] !== undefined && temp[index+p[index]] === temp[index-p[index]]) {
            ++p[index];
        }

        if (index + p[index] >= mx) {
            mx  = index + p[index];
            pos = index;
        }

        if (p[index] > maxLength) {
            maxLength = p[index];
            maxLengthIndex = index;
        }
    }
    
    if (temp[maxLengthIndex] === '#') {
        return s.substr(maxLengthIndex/2 - (maxLength-1)/2, maxLength - 1);
    } else {
        return s.substr(Math.floor(maxLengthIndex/2) - maxLength / 2 + 1, maxLength - 1);
    }
};

function min(a, b) {
    return a <  b ? a : b;
}

console.log(longestPalindrome1('sfdabcfyllyfcbaabc'));
