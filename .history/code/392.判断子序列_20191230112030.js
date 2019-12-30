/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (let i = 0; i <s.length; i++) {
        let x = t.indexOf(s[i]);
        let y = t.indexOf(s[i - 1]);
        if (x < y)
            return false
    }
    return true;
};

let s  = 'abc'
let t = 'ahbgdc'

console.log(isSubsequence(s, t))