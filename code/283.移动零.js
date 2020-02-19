/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let t = 0;
    while (i < nums.length) {
        if (nums[t] === 0) {
            for (let j = t; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1]
            }
            nums[nums.length - 1] = 0;
        }else {
            t++;
        }
        i++;
    }
    return nums;
};

//双指针优化解法
var moveZeroes = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            nums[i] = nums[j];
            i++;
        }
    }
    for (; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
