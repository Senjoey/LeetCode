/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // const n = prices.length
  // let profit = 0
  // for (let i = 0; i < n-1; i++) {
  //   for (let j = i+1; j < n; j++) {
  //     if (prices[j] < prices[i]) {
  //       break
  //     } else {
  //       let diff = prices[j] - prices[i]
  //       profit = diff > profit ? diff : profit
  //     }
  //   }
  // }
  // return profit
  let minPrice = Number.MAX_SAFE_INTEGER
  let maxProfit = 0
  for (let i = 0, n = prices.length; i < n; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }
  return maxProfit
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))

