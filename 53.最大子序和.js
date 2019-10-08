/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
  // 动态规划
  // if (!nums.length) return 0
  // let res = nums[0]
  // let sum = nums[0]
  // for (let i = 1, n = nums.length; i < n; i++) {
  //   sum = Math.max(sum+nums[i], nums[i])
  //   res = Math.max(res, sum)
  // }
  // return res
// };

 // 分治法
var maxSubArray = function(nums) {
  if (!nums.length) return 0
  const ans = find(nums, 0, nums.length-1)
  return ans
}
var find = function(nums, left, right) {
  if (left === right) return nums[left]
  const mid = parseInt((left+right)/2)
  const lMax = find(nums, left, mid)
  const rMax = find(nums, mid+1, right)
  const acrossMax = findArossMax(nums, left, mid, right)
  return Math.max(lMax, rMax, acrossMax)
}
var findArossMax = function(nums, left, mid, right) {
  let leftMax = nums[mid]
  let rightMax = nums[mid+1]
  let sum = 0
  for (let i = mid; i >= left; i--) {
    sum += nums[i]
    if (sum > leftMax)
      leftMax = sum
  }
  sum = 0
  for (let i = mid+1; i <= right; i++) {
    sum += nums[i]
    if (sum > rightMax) {
      rightMax = sum
    }
  }
  return leftMax+rightMax
}

const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))

