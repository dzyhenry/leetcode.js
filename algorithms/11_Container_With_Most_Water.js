/* Link: https://leetcode.com/problems/container-with-most-water/description/
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines,
 * which together with x-axis forms a container, such that the container contains the most water.
 */

/*
 * 思路：设置两个指针left，right分别位于数组两端，指针不断向数组内部移动，直到left === right，每次移动指针所指的height较小的值
 * 在指针移动过程中不断计算当前区域，最大的区域就在指针移动过程中
 * 解释参考：https://discuss.leetcode.com/topic/25004/easy-concise-java-o-n-solution-with-proof-and-explanation
 */

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  var left = 0;
  var right = height.length - 1;
  var max = 0;
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) {
      ++left;
    } else {
      --right;
    }
  }
  return max;
};
