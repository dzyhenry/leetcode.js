/* 1. Two Sum
 * link: https://leetcode.com/problems/two-sum/

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 时间复杂度为O(n2)的就不介绍了。

/* 方法一：利用hash思想，
 * 1. key为数组的值，value为对应的index
 * 2. 遍历数组，若obj[target-nums[i]] !== undefined
 *    表明与当前值和为target的值已经出现，并且其index就是obj[target-nums[i]]
 * 3. 算法时间复杂度O(n)，空间复杂度O(target).
 */ 
 
var twoSum = function(nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj[target-nums[i]] !== undefined) {
            return [obj[target-nums[i]] + 1, i + 1];
        }
        obj[nums[i]] = i;
    }
};

/* 方法一：夹逼思想
 * 1. 现将数组从小到大排序
 * 2. 在数组两端设立index，根据两端值的sum与target对比，移动index，直到两index相等
 * 3. 算法时间复杂度O(nlog(n))，空间复杂度,快排的空间复杂度，O(log(n)).
 */ 
var twoSum1 = function (nums, target) {
    var arr = [], i, j;
    for (i=0; i<nums.length; ++i) {
        arr.push({index: i+1, value: nums[i]});
    }
    
    arr.sort(function (a, b) {
        return a.value - b.value;
    });

    for (i=0, j=arr.length-1; i < j;) {
        if(arr[i].value + arr[j].value === target) {
            if (arr[i].index < arr[j].index) {
                return [arr[i].index, arr[j].index];
            }
            return [arr[j].index, arr[i].index];
        }
        else if (arr[i].value + arr[j].value > target) {
            --j;
        } else {
            ++i;
        }
    }
};
