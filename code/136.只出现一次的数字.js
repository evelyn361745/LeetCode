/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let x = new Map(),
    res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (x.has(nums[i])) {
            x.set(nums[i],x.get(nums[i]) + 1)
        }else
            x.set(nums[i], 1);
    }
    x.forEach(function(value, key) {
        if (value === 1)
            res = key;
    })
    return res
};
let nums = [4,1,2,1,2];
console.log(singleNumber(nums));