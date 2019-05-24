// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/* Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0. */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(stockPrices) {
  let profits = [0];
  let minPrice;
  let maxPrice;
  let l = stockPrices.length;

  profits = new Array(l).fill(0);
  maxPrice = stockPrices[l - 1];

  /* Get the maximum profit with only one transaction
  allowed. After this loop, profit[i] contains maximum
  profit from price[i..n-1] using at most one trans. */
  for (let i = l - 2; i >= 0; i--) {
    maxPrice = Math.max(stockPrices[i], maxPrice);
    profits[i] = Math.max(profits[i + 1], maxPrice - stockPrices[i]);
  }

  // Maximum profit is maximum of:
  // a) previous maximum, i.e., profit[i-1]
  // b) (Buy, Sell) at (min_price, price[i]) and add
  // profit of other trans. stored in profit[i]
  minPrice = stockPrices[0];
  for (let i = 1; i < l; i++) {
    minPrice = Math.min(stockPrices[i], minPrice);
    profits[i] = Math.max(profits[i - 1], profits[i] + stockPrices[i] - minPrice);
  }
  if (stockPrices === []) return 0;
  return profits[l - 1];
};

console.log(maxProfit([7,1,5,3,6,4]), 7)
console.log(maxProfit([]), 0)
