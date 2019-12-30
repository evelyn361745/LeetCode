/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort(sortNumber)
    let n = costs.length / 2;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += costs[i][0] + costs[i+n][1];
    }
    return sum   
};
function sortNumber(a, b) {
    let x = a[0] - a[1];
    let y = b[0] - b[1];
    return x - y;
}


let costs = [[10,20],[30,200],[400,50],[30,20]];
console.log(twoCitySchedCost(costs))