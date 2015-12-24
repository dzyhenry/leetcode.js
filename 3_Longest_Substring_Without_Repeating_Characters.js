/* link : https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 3 Longest subtring without repeating characters
 *
 * Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
*/

/*思路：此题所求为最长的不重复字串，考虑用动态规划，把问题分解。
 * 动态规划的关键是状态的定义和状态的转移方程的定义，可以考虑：
 * 状态的定义：F(n) 为以字符s[n]结尾且包含s[n]的最长不重复子串的长度。
 * 转移方程的定义：
 * F(n) = F(n-1) + 1, 当不存在k使得s[k]===s[n] && k < n
 * F(n) = F(n-1) + 1, k 满足max(s[k] === s[n]) && k < n && F(n-1) < n - k
 * F(n) = n - k, k 满足max(s[k] === s[n]) && k < n && F(n-1) > n - k
 *
 * 最终所求解为max(F(i)), 用数组保存每一步F(n)的值，用对象保存s[k]的最大重复index
 * 本题最终的时间复杂度可达到O(n)。
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    if(s.length === 1) return 1;
    
    var exsists = {}, preMaxLen;
    var maxLen = 1;
    var repeatIndex;
    preMaxLen = 1;
    exsists[s[0]] = 0;
    for(var i=1; i<s.length; ++i){
        if(exsists[s[i]] !== undefined) {
            repeatIndex = exsists[s[i]];
            if(preMaxLen < i - repeatIndex){
                preMaxLen = preMaxLen + 1;
            } else {
                preMaxLen = i -  repeatIndex;
            }
        } else {
            preMaxLen = preMaxLen + 1;
        }
        exsists[s[i]] = i;
        maxLen = preMaxLen > maxLen ? preMaxLen : maxLen;
    }
    return maxLen;
};
