/*
  Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
  Return the sum of the three integers. You may assume that each input would have exactly one solution.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 在 3Sum 的基础上，考虑最近的区间即可
//
var threeSumClosest = function(nums, target) {
  nums.sort(function(a, b) {
    return a - b;
  });
  var res = 0;
  var currentMin = Number.MAX_SAFE_INTEGER
  for (var i = 0; i < nums.length; i++) {
    var start = i + 1;
    var end = nums.length - 1;
    while (start < end) {
      var startNum = nums[start];
      var endNum = nums[end];
      var sum = nums[i] + startNum + endNum;
      var temp = sum - target;

      if (Math.abs(temp) < currentMin) {
        currentMin = Math.abs(temp);
        res = sum;
      }

      if (temp > 0) {
        while(end > start && nums[end] === endNum) {
          --end;
        }
      } else if (temp < 0) {
        while(end > start && nums[start] === startNum) {
          ++start;
        }
      } else {
        return sum;
      }
    }

    while (i < nums.length && nums[i + 1] === nums[i]) {
      ++i;
    }
  }
  return res;
};

console.log(threeSumClosest([3, 2, 3, -4, -1, -3, 0, -2, 7, 2, 1], 1));
