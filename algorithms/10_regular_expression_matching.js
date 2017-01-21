/*
 * 设dp[i][j]为前i-1个字符与前j-1个模式串的匹配结果
 *
 */
var isMatch = function(s, p) {

  var sLength = s.length;
  var pLength = p.length;
  var dp = [];

  for (var i = 0; i <= sLength; i++) {
    dp[i] = [];
  }

  for (i = 0; i <= sLength; i++) {
    for (var j = 0; j <= pLength; j++) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;

  // 初始化，当s的长度为0时p所对应的各个值
  // p需要匹配0个字符，为true的情况有两种：1. ‘***’ 2. ‘a*b*c*’
  // 理论上来讲，动态规划的二维表格
  for (j = 0; j < pLength; j++) {
    // 第i-1个字符为*
    if (p[j] === '*') {
      if(dp[0][j] || (i > 0 && dp[0][j - 1])) {
        dp[0][j + 1] = true;
      }
    }
  }

  for (i = 0; i < sLength; i++) {
    for (j = 0; j < pLength; j++) {
      if (p[j] !== '*') {
        dp[i + 1][j + 1] = dp[i][j] && (s[i] === p[j] || p[j] === '.');
      } else {
        // '*'能产生字符
        if ((j > 0 && p[j - 1] === s[i] || p[j - 1] === '.')) {
          /* 
           * dp[i+1][j+1]的几种情况分析
           * 1、dp[i][j+1]，x*只生产一个x
           * 2、dp[i+1][j]，x*生产多个x
           * 3、dp[i+1][j-1]，x*生产0个x
           */
           dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j] || dp[i + 1][j - 1];
        } else {
          // '*'不能产生字符
          // x*只能生产0个x
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        }
      }
    }
  }

  return dp[sLength][pLength];
};
