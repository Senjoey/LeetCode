/** 
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，
并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 思路：使用map，key为nums中的数字，value是其下标
    if (nums.length == 2) return [0, 1];
    let map = {};
    for (let i=0; i<nums.length; i++) {
        let find = target - nums[i];
        if (map[find]!==undefined) return [map[find], i];
        else map[nums[i]] = i
    }
};
var test = function() {
    let nums = [2, 5, 5, 11];
    let target = 10;
    console.log(twoSum(nums, target));
};

test();
