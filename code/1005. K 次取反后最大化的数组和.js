/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort(sortNumber);
    while(K != 0) {
        A[0] = -A[0];
        A.sort(sortNumber);
        K--;
    }
    return sum(A)
};
function sortNumber(a, b) {
    return a - b;
}
function sum (arr) {
    return eval(arr.join('+'));
}

let A = [4,2,3];
let K = 1;
console.log(largestSumAfterKNegations(A, K))