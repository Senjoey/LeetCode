/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var robWithoutOpt = function(nums) {
  if (nums.length == 0) return 0
  if (nums.length == 1) return nums[0]
  const f = []
  for (let i = 0; i < nums.length; i++) f.push(0)
  f[0] = nums[0]
  f[1] = Math.max(nums[0], nums[1])
  let maxMoney = Math.max(f[0], f[1])
  if (nums.length == 2) return maxMoney
  for (let i = 2; i < nums.length; i++) {
    f[i] = Math.max(f[i-2]+nums[i], f[i-1])    
    maxMoney = f[i] > maxMoney ? f[i] : maxMoney
  }
  return maxMoney
};

// const nums = [2,1,1,2];
// const ans = rob(nums)
// console.log(ans)
var rob = function(nums) {
  let prev = 0
  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    let temp = cur
    cur = Math.max(prev+nums[i], cur)
    prev = temp
  }
  return cur
}

