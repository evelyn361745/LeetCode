/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let maxVal = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices [i]) {
            maxVal = maxVal + prices[i + 1] - prices [i] - fee;
        }
    }
    return maxVal
};
let prices = [1, 3, 2, 8, 4, 9];
let fee = 2;
console.log(maxProfit(prices, fee))
