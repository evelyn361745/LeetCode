#方法一，暴力循环的优化解法
#通过array.index(obj)可以匹配到列表中与obj值相等的第一个位置，
#所以通过切片我们从当前位置向前查找target-nums[i]的位置
class Solution:
    def twoSum(self, nums, target):
        j = -1
        for i in range(1, len(nums)):
            tmp = nums[:i]
            if ((target - nums[i]) in tmp):
                j = nums.index(target - nums[i])
                return [j, i]
        return []
a = Solution()
print (a.twoSum([3,3], 6))
