/**
 * wikipidia link: https://en.wikipedia.org/wiki/Longest_common_substring_problem
 * 
 * Given two strings, S of length {\displaystyle m} m and T of length n,
 * find the longest strings which are substrings of both  S and  T.
 *
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {number[]}
 */

/*
 * 解题思路
 * 动态规划
 * 设 dp[i][j]为以S[i]和T[j]的字符的最长公共字符串的长度
 * 那么当S[i] = T[j]时，dp[i][j] = dp[i-1][j-1] + 1，否则dp[i][j] = 0
 */

function longestCommonSubstring(S, T) {
  var l1 = S.length;
  var l2 = T.length;
  var dp = [];
  
  var maxLength = 0;
  var SIndex = 0;

  for (var i = 0; i <= l1; i++) {
    dp[i] = [];
    dp[i][0] = 0;
  }
  for (i = 0; i <= l2; i++) {
    dp[0][i] = 0;
  }

  for (i = 1; i <= l1; i++) {
    for (var j = 1; j <= l2; j++) {
      if (S[i - 1] === T[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      if (dp[i][j] > maxLength) {
        maxLength = dp[i][j];
        SIndex = i;
      }
    }
  }
  return [maxLength, SIndex];
}

var s = 'ABCDSBA';
var t = 'BABCDSAA';

console.log(longestCommonSubstring(s, t));
