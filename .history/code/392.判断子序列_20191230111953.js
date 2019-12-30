/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (let i = 0; i <s.length; i++) {
        let x = t.indexOf(s[i]);
        let y = t.indexOf(s)
        if (x)
    }
};

let s  = 'abc'
let t = 'ahbgdc'

console.log(isSubsequence(s, t))