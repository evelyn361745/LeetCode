/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let n = A.length / 2;
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])){
            map.set(A[i], map.get(A[i]) + 1)
            if (map.get(A[i]) === n)
                return A[i]
        }
        else
            map.set(A[i], 1)
    }
};
let A = [5,1,5,2,5,3,5,4];
console.log(repeatedNTimes(A))