/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const res = [];
var threeSum = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    })
    let n = nums.length;
    dfs(0, [], nums, n)    
    return res;
};

function dfs(start, temp, nums, n,) {
    if (temp.length === 3) {
        let x = [...temp]
        let flag = true;
        for (let j = 0; j < res.length; j++) {
            if(isEquar(res[j], temp)) {
                flag = false;
                break;
            }
        }
        if (sum(temp) === 0 && flag) {
            res.push(x)
        }
    }else {
        for (let i = start; i < n; i++) {
            temp.push(nums[i]);
            dfs(i + 1, temp, nums, n);
            temp.pop();
        }
    }
}

function isEquar(a, b) {
    // 判断数组的长度
    if (a.length !== b.length) {
        return false
    } else {
        // 循环遍历数组的值进行比较
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}

function sum(arr) {
    return eval(arr.join("+"));
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums))