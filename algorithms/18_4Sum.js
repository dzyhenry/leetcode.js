/* 
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 * Note: The solution set must not contain duplicate quadruplets.
 *
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 *
 */

// 在3Sum 的基础上多一层循环而已，此类问题可以依次类推，时间复杂度为 O(n^3)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort(function(a, b) {
    return a - b;
  });

  var res = [];
  for (var i = 0; i < nums.length; i++) {
    var n1 = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      var n2 = nums[j];
      var start = j + 1;
      var end = nums.length - 1;
      while (start < end) {
        var n3 = nums[start];
        var n4 = nums[end];
        var temp = n1 + n2 + n3 + n4;
        if (temp < target) {
          ++start;
        } else if (temp > target) {
          --end;
        } else {
          res.push([nums[i], nums[j], nums[start], nums[end]]);
          while(n4 === nums[end] && end > start) {
            --end;
          }
          while(n3 === nums[start] && end > start) {
            ++start;
          }
        }
      }
      while(nums[j] === nums[j + 1] && j < nums.length) {
        ++j;
      }
    }
    while(nums[i] === nums[i + 1] && i < nums.length) {
      ++i;
    }
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
