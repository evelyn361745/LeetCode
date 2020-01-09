/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection1 = function(nums1, nums2) {
    let res = [];
    let map1 = new Map(),
    map2 = new Map();
    for (let i = 0; i < nums1.length; i++){
        if (map1.has(nums1[i]))
            continue
        else
            map1.set(nums1[i], 1)
    }
    for (let i = 0; i < nums2.length; i++){
        if (map2.has(nums2[i]))
            continue
        else
            map2.set(nums2[i], 1)
    }
    let x1 = Array.from(map1.keys()).sort();
    let x2 = Array.from(map2.keys()).sort();
    console.log(x1, x2);
    while(x1.length !== 0) {
        if (x2.includes(x1[0])){
            res.push(x1[0]);
        }
        x1.shift();
    }
    return res;
};
var intersection = function(nums1, nums2) {
    let res = [];
    let map1 = new Map();
    for (let i = 0; i < nums1.length; i++){
        if (map1.has(nums1[i]))
            continue
        else
            map1.set(nums1[i], 1)
    }
    nums2.sort();
    for (let i = 0; i < nums2.length; i++){
        if (i > 0 && nums2[i] !== nums2[i - 1]) {
            if (map1.has(nums2[i]))
                res.push(nums2[i])  
        }else {
            if (map1.has(nums2[i]) && !res.includes(nums2[i]))
                res.push(nums2[i]) 
        }
        
    }
    return res;
};
let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2))