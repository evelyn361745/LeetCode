// 题目描述
// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。
// 请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

// 方法一，利用hash表 时间复杂度：O(n) 空间复杂度：O(n)
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (map.has(numbers[i])) {
            duplication[0] = numbers[i];
            return true;
        }else {
            map.set(numbers[i], 1)
        }
    }
    return false
}

// 利用特性
/*
* 数组的长度为 n 且所有数字都在 0 到 n-1 的范围内，我们可以将每次遇到的数进行"归位"，当某个数发现自己的"位置"被相同的数占了，则出现重复。
* 扫描整个数组，当扫描到下标为 i 的数字时，首先比较该数字（m）是否等于 i，如果是，则接着扫描下一个数字；如果不是，则拿 m 与第 m 个数比较。如果 m 与第 m 个数相等，则说明出现重复了；如果 m 与第 m 个数不相等，则将 m 与第 m 个数交换，将 m "归位"，再重复比较交换的过程，直到发现重复的数

* 举个栗子：
* 以数组 {2,3,1,0,2,5,3} 为例
* 当 i = 0 时，nums[i] = 2 != i，判断 nums[i] 不等于 nums[nums[i]]，交换 nums[i] 和 nums[nums[i]]，交换后数组为：{1,3,2,0,2,5,3}
* 此时 i = 0，nums[i] = 1 != i，判断 nums[i] 不等于 nums[nums[i]]，交换 nums[i] 和 nums[nums[i]]，交换后数组为：{3,1,2,0,2,5,3}
* 此时 i = 0，nums[i] = 3 != i，判断 nums[i] 不等于 nums[nums[i]]，交换 nums[i] 和 nums[nums[i]]，交换后数组为：{0,1,2,3,2,5,3}
* 此时 i = 0，nums[i] = 0 = i，继续下一组
* 当 i = 1，nums[i] = 1 = i，继续下一组
* 当 i = 2，nums[i] = 2 = i，继续下一组
* 当 i = 3，nums[i] = 3 = i，继续下一组
* 当 i = 4，nums[i] = 2 != i，判断 nums[i] 等于 nums[nums[i]]，出现重复，赋值返回

* 时间复杂度：O(n)O(n)
* 空间复杂度：O(1)O(1)
*/
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] === i) {
            i++;
        }else {
            if (numbers[i] === numbers[numbers[i]]) {
                duplication[0] = numbers[i];
                return true;
            }else {
                let tmp = numbers[i];
                numbers[i] = numbers[numbers[i]]
                numbers[tmp] = tmp;
            }
        }
    }

    return false;
}
