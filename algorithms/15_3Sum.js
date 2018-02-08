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
 * 先将数组排序
 * 依次遍历每个数，对所选中的数的右侧数组使用“夹逼法”筛选出两个数，使这三个数的和为0
 * 由于最终求得的集合不能重复，在遍历和夹逼过程中，需要去掉重复的数
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
