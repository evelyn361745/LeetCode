/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let n = chips.length;
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n; i++) {
        if ((chips[i] % 2) === 0)
            even++;
        else
            odd++;
    }
    return Math.min(even, odd);
};