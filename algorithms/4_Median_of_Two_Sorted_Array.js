/* link: https://leetcode.com/problems/median-of-two-sorted-arrays/
  There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
*/

/**
 *  * @param {number[]} nums1
 *   * @param {number[]} nums2
 *    * @return {number}
 *     */

/* 本题看似简单，但若要把时间复杂度控制在O(log(m+n))之内，还是比较有难度的，在leetcode中的难度属于hard。
 * 思路：
 * 1. 首先考虑求两个有序数列中第k大的数值;
 * 2. 那么两个数列中第k/2(向下取整，后面所有的k/2都是向下取整)个数中较小的数列的前m = min(k/2, length1, length2)个数值(假设两个数列的长度都大于k/2，如果有某个数列的长度小于k/2，则用该数列的长度作为此次处理的长度)可舍去, 并在剩下的数列中找到第k - m个数;
 * 3. 依照2中的方法可用递归的方式在O（log(m+n))的时间复杂度中找到地k大的数值;
 * 3. 能找到地k大的数，自然能找到中位数
 */

function findKth(nums1, l1, r1, nums2, l2, r2, k) {
    var length1 = r1 - l1 + 1;
    var length2 = r2 - l2 + 1;
    if (length1 > length2) {
        return findKth(nums2, l2, r2, nums1, l1, r1, k);
    }

    if ( length1 === 0) {
        return nums2[l2 + k - 1];
    }

    if (k === 1) {
        if (nums1[l1] && nums1[l1] < nums2[l2]) {
            return nums1[l1];
        } else {
            return nums2[l2];
        }
    }

    var middle = Math.floor(k / 2);
    var handleLength = middle > length1 ? length1 : middle;

    if (nums1[l1 + handleLength - 1] < nums2[l2 + k - handleLength - 1]) {
        return findKth(nums1, l1 + handleLength, r1, nums2, l2, r2, k - handleLength);
    } else if (nums1[l1 + handleLength - 1] > nums2[l2 + k - handleLength - 1]) {
        return findKth(nums1, l1, r1, nums2, l2 + handleLength, r2, k - handleLength);
    } else {
        return nums1[handleLength - 1];
    }
}

var findMedianSortedArrays = function(nums1, nums2) {
    var totalLength = nums1.length + nums2.length;
    if (totalLength % 2 === 1) {
        return findKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, (totalLength + 1) / 2);
    } else {
        return  (findKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length -1, totalLength / 2) + 
            findKth(nums1, 0, nums1.length - 1, nums2, 0, nums2.length -1, (totalLength / 2) + 1)) / 2;
    }
};
