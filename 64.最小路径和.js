/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const h = grid.length, w = grid[0].length
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (i===0 && j===0) {
        grid[i][j] = grid[i][j]
      } else if (i === 0) {
        grid[i][j] = grid[i][j-1] + grid[i][j]
      } else if (j === 0) {
        grid[i][j] = grid[i-1][j] + grid[i][j]
      } else {
        grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]
      }
    }
  }
  return grid[h-1][w-1]
};
// let g = [[1,3,1], [1, 5, 1], [4, 2, 1]]
// let res = minPathSum(g)
// console.log(res)
// @lc code=end

