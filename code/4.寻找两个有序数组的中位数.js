/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    if (n1 === 0 && n2 === 0)
        return 0;
    else if (n1 === 0 && n2 !== 0){
        if (n2 % 2 === 0) {
            return parseFloat((nums2[n2 / 2] + nums2[n2 / 2 - 1]) / 2)
        }else {
            return nums2[parseInt(n2 / 2)]
        }
    }
    else if (n1 !== 0 && n2 === 0){
        if (n1 % 2 === 0) {
            return parseFloat((nums1[n1 / 2] + nums1[n1 / 2 - 1]) / 2)
        }else {
            return nums1[parseInt(n1 / 2)]
        }
    }else {
        let n = n1 + n2;
        let tmp = [];
        while (nums1.length > 0 && nums2.length > 0) {
            if (nums1[0] < nums2[0]) {
                tmp.push(nums1[0])
                nums1.shift();
            }else {
                tmp.push(nums2[0])
                nums2.shift()
            }
        }
        while (nums1.length > 0) {
            tmp.push(nums1[0])
            nums1.shift()
        }
        while (nums2.length > 0) {
            tmp.push(nums2[0])
            nums2.shift()
        }
        if (n % 2 === 0) {
            return parseFloat((tmp[n/2] + tmp[n/2 - 1]) / 2)
        }else {
            return tmp[parseInt(n/2)]
        }
    }
};
let nums1 = [1, 2]
let nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))