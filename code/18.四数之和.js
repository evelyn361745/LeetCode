/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    nums.sort((a, b) => {
        return a - b;
    })
    let n = nums.length;
    if (n < 4) 
        return [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        let curtarget = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) 
                continue;
            let L = j + 1;
            let R = nums.length - 1;
            while (L < R) {
                let sum = nums[j] + nums[L] + nums[R];
                if (sum === curtarget) {
                    res.push([nums[i], nums[j], nums[L], nums[R]]);
                    while (L < R && nums[L] === nums[L + 1]) 
                        L++;
                    while (L < R && nums[ R] === nums [R - 1])
                        R--;
                    L++;
                    R--;
                }
                else if (sum > curtarget) {
                    R--;
                }
                else {
                    L++;
                }
            }
        }
    }
    return res;
};
let nums = [0, 0, 0, 0];
let target = 0;
console.log(fourSum(nums, target))