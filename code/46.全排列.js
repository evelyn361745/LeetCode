/**
 * @param {number[]} nums
 * @return {number[][]}
 * 依次放入，依次弹出
 */
var permute = function(nums) {
    const list = [];
    // Arrays.sort(nums); // not necessary
    backtrack(list, [], nums);
    return list;
};

function backtrack(list, tempList, nums) {
  if (tempList.length == nums.length) {
    list.push(tempList.slice(0));
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue; // element already exists, skip
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
    }
  }
}