/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxres = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                let tmp = prices[j] - prices[i];
                if (tmp > maxres)
                    maxres = tmp;
            }
        }
    }
    return maxres;
};
