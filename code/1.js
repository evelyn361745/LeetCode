/**
 * 方法一 暴力循环
 * 使用两层循环，外层循环计算当前元素与target 之间的差值，
 * 内层循环寻找该差值，若找到该差值，则返回两个元素的下标。
 * 时间复杂度：O(n^2)
 * 耗时：140ms 内存：35.2MB
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let tmp = nums[i] + nums[j];
            if (tmp === target) {
                return [i, j]
            }
        }
    }
    return []
};

/**
 * 方法二 利用map函数，两遍hash
 * 时间复杂度：O(n)，
 * 我们把包含有 nn 个元素的列表遍历两次。由于哈希表将查找时间缩短到 O(1) ，所以时间复杂度为 O(n)。
 * 空间复杂度：O(n)，
 * 所需的额外空间取决于哈希表中存储的元素数量，该表中存储了 n 个元素。
 * 耗时：72ms 内存：36.7MB
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set (nums[i], i);
    }
    for (let j = 0; j < nums.length; j++) {
        if (map.get(target - nums[j]) && (map.get(target - nums[j]) !== j)) {
            return [j, map.get(target - nums[j])]
        }
    }
    return []
};

/**
 * 方法三 一遍hash 插入时顺带在map中查找是否有target-nums[i]
 * 耗时：64ms 内存：35.9MB
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i]) && (map.get(target - nums[i]) !== i)) {
            return [map.get(target - nums[i]), i]
        }
        map.set (nums[i], i);
    }
    return []
};