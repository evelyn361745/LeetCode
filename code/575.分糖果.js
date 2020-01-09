/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let meimei = new Map();
    let all = new Map();
    let n = candies.length / 2;
    for (let i = 0; i < candies.length; i++) {
        if (all.has(candies[i]))
            all.set(candies[i], all.get(candies[i]) + 1)
        else
            all.set(candies[i], 1)
        if (meimei.size < n && !meimei.has(candies[i])) {
            meimei.set(candies[i], 1)
        }
    }
    return meimei.size;
};
let candies = [1,1,2,2,3,3];
console.log(distributeCandies(candies))