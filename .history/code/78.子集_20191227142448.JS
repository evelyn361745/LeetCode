/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const list = [];
    let start = 0;
    let n = nums.length;
    dfs(start, list, [], nums, n);
    return list;
};

function dfs(start, list, templist, nums, n) {
    let s = [...templist]
    list.push(s);
    if (start === n){
    }else {
        for (let i = start; i < n; i++) {
            templist.push(nums[i])
            dfs(i + 1, list, templist, nums, n)
            templist.pop();
        }    
    }
}

let nums = [1,2,3]
console.log(subsets(nums))