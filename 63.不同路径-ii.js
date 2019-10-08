/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const h = obstacleGrid.length
  const w = obstacleGrid[0].length
  const dp = new Array(h)
  for (let i = 0; i < h; i++) {
    dp[i] = new Array(w)
    for (let j = 0; j < w; j++) {
      dp[i][j] = 0
    }
  }
  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0
  for (let i = 1; i < w; i++) {
    if (obstacleGrid[0][i] === 1) {
      dp[0][i] = 0
    } else {
      dp[0][i] = dp[0][i-1]
    }
  }
  for (let i = 1; i < h; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[i][0] = 0
    } else {
      dp[i][0] = dp[i-1][0]
    }
  }
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }
  }
  return dp[h-1][w-1]
};
// const o = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
// const res = uniquePathsWithObstacles(o)
// console.log(res)
// @lc code=end

