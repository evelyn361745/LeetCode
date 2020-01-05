/**
 * @param {number[]} nums
 * @return {number[][]}
 * 使用深度搜索会超时，这道题目主要难点在于去重，所以重开始考虑，遇到相同的跳过
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => {
        return a - b;
    })
    let n = nums.length;
    if (n < 3)
        return [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0)
            return res;
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        let L = i + 1;
        let R = n - 1;
        while (L < R) {
            let sum = parseInt(nums[i]) +  parseInt(nums[L]) + parseInt(nums[R]);
            if (sum === 0) {
                let tmp = [nums[i], nums[L], nums[R]];
                res.push(tmp);
                while ((L < R) && (nums[L] === nums[L + 1]))
                    L = L + 1;
                while ((L < R) && (nums[R] === nums[R - 1]))
                    R = R - 1;
                L = L + 1;
                R = R - 1
            }
            else if (sum > 0) {
                R = R - 1;
            }
            else {
                L = L + 1;
            }
        }
        
    }
    return res;
};


let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums))