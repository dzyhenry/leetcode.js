/*
* Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
* Find all unique triplets in the array which gives the sum of zero.
* Note: The solution set must not contain duplicate triplets.
*
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 
 * 简单说就是在 2Sum 的基础上，增加一层遍历，求 3 个数的和满足目标值;
 * 需要注意的是去重, 方法是: 在每一层的遍历中，对于已经处理过的无需重复遍历
 */
var threeSum = function(nums) {
  var res = []; 
  nums.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < nums.length; i++) {
    var start = i + 1;
    var end = nums.length - 1;

    while (start < end) {
      var temp = nums[start] + nums[end] + nums[i];
      if (temp > 0) {
        --end;
      } else if (temp < 0) {
        ++start;
      } else {
        var startNum = nums[start];
        var endNum = nums[end];
        res.push([nums[i], startNum, endNum]);
        while(startNum === nums[start] && start < end) {
          ++start;
        }
        while(endNum === nums[end] && start < end) {
          --end;
        }
      }
    }

    while(nums[i] === nums[i + 1]) {
      ++i;
    }
  }

  return res;
}
