/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length-1)
};
var binarySearch = function(nums, target, start, end) {
    if (start > end) return -1
    if (start === end) return nums[start] === target ? start : -1
    let middle = parseInt((start+end)/2)
    if (target === nums[middle]) {
        return middle
    } else if (target > nums[middle]) {
        return binarySearch(nums, target, middle+1, end)
    } else {
        return binarySearch(nums, target, start, middle-1)
    }
}
// const nums = [-1,0,3,5,9,12]
// const target = 2
// const ans = search(nums, target)
// console.log(ans) 