/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i]))
            map.set(arr[i], map.get(arr[i]) + 1)
        else
            map.set(arr[i], 1)
    }
    let map2 = new Map();
    let res = true;
    map.forEach(function(value, key) {
        console.log(value, key)
        if (map2.has(value))
            res = false;
        else {
            map2.set(value, key)
        }
    })
    return res;
};
let arr = [1, 2];
console.log(uniqueOccurrences(arr))