/** 
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 合并两个数组，然后获取数组的中位数
    let num = [];
    if (nums1.length == 0) return findMedian(nums2);
    if (nums2.length == 0) return findMedian(nums1);
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            num.push(nums1[i]);
            i++;
        } else {
            num.push(nums2[j]);
            j++;
        }
    }
    if (i == nums1.length) {
        while (j < nums2.length) {
            num.push(nums2[j]);
            j++;
        }
    }
    if (j == nums2.length) {
        while (i < nums1.length) {
            num.push(nums1[i]);
            i++;
        }
    }
    return findMedian(num);
};

var findMedian = function (num) {
    // a= [1,2,3] a=[1,2,3,4]
    const length = num.length;
    if (length % 2 == 0) {
        return (num[length/2-1] + num[length/2])/2
    } else {
        return num[Math.floor(length/2)];
    }
}

var test = function() {
    let nums1 = [1, 2];
    let nums2 = [3, 4];
    let ans = findMedianSortedArrays(nums1, nums2);
    console.log(ans);
}

test();