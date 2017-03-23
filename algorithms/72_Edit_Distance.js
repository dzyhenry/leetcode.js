/* link : https://leetcode.com/problems/edit-distance 
 * 72 Edit Distance
 *
 * Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. 
 * (each operation is counted as 1 step.)
 */

/*思路：编辑距离, https://en.wikipedia.org/wiki/Edit_distance。
 * 动态规划：
 * 设s[i][j]为word1的前i个字符与word2的前j个字符的最小编辑距离，那么
 * s[0][0] = 0,
 * s[i][j] = min{ s[i][j-1] + 1, s[i-1][j] + 1, word1[i] === word2[j] ? s[i-1][j-1] : s[i-1][j-1] + 1 }
 *
 */


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minIn3 = function (x, y, z) {
  return x < y ? (x < z ? x : z) : (y < z ? y : z);
};

var minDistance = function(word1, word2) {
  var l1 = word1.length; 
  var l2 = word2.length;

  if (l1 === 0) {
    return l2;
  }
  if (l2 === 0) {
    return l1;
  }
  
  var dp = [];
  for (var i = 0; i <= l1; i++) {
    dp[i] = [];
    dp[i][0] = i;
  }
  for (i = 0; i <= l2; i++) {
    dp[0][i] = i;
  }

  for (i = 1; i <= l1; i++) {
    for (var j = 1; j <= l2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = minIn3(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1]);
      } else {
        dp[i][j] = minIn3(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + 1);
      }
    }
  }

  return dp[l1][l2];
};

var word1 = 'bbidesf';
var word2 = 'bidef';

console.log(minDistance(word1, word2));
