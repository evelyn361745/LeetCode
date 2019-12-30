/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let minVal = 0;
    let i = A[0].length - 1;
    for (i; i >= 0; i--) {
        for (let j = 1; j < A.length; j++) {
            if (A[j][i] < A[j - 1][i]){
                minVal++;
                break;
            }
        }
    }
    return minVal;
};
let A = ["a", "b"];
console.log(minDeletionSize(A))