/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let cnt = 0;
    let cntLeft = 0;
    let cntRight = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R')
            cntRight++;
        else
            cntLeft++;
        if (cntLeft === cntRight && cntLeft !== 0 && cntRight != 0) {
            cnt++;
            cntLeft = 0;
            cntRight = 0;
        }
    }
    return cnt;
};
let s = "RLRRLLRLRL";
console.log(balancedStringSplit(s))
