/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hashmap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hashmap.has(s[i]))
            hashmap.set(s[i], hashmap.get(s[i]) + 1)
        else
            hashmap.set(s[i], 1);
    }
    let arr = Array.from(hashmap)
    arr.sort((a, b) => {
        return b[1] - a[1]
    })
    let res = '';
    for (let j = 0; j < arr.length; j++) {
        while (arr[j][1]) {
            res += arr[j][0];
            arr[j][1]--;
        }
    }
    return res;
};
let s = "tree";
console.log(frequencySort(s))