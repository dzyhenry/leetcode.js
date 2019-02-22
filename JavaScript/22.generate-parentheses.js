/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var acc = [];
  backTracking('', 0, 0, n, acc);
  return acc;
};

var backTracking = function(cur, open, close, max, acc) {
  if (cur.length >= max * 2) {
    acc.push(cur);
  }
  if (open < max) {
    backTracking(cur + '(', open + 1, close, max, acc);
  }
  if(close < open) {
    backTracking(cur + ')', open, close + 1, max, acc);
  }
}
