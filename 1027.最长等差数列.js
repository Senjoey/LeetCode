/*
 * @lc app=leetcode.cn id=1027 lang=javascript
 *
 * [1027] 最长等差数列
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  const dp = Array(A.length)
  for (let i = 0; i < A.length; i++) {
    dp[i] = {}
  }
  let ans = 2
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      let step = A[i] - A[j]
      let num = dp[j][step] ? dp[j][step] + 1 : 2
      dp[i][step] = num
      ans = Math.max(ans, num)
    }
  }
  return ans
};
// let A = [20,1,15,3,10,5,8]
// console.log(longestArithSeqLength(A))
