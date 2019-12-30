/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let rs = s.split('');
    let rt = t.split('');
    dfs(0, 0, rs, rt)
};

let s  = 'abc'
let t = 'ahbgdc'

console.log(isSubsequence(s, t))