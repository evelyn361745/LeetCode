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

function dfs(starts, startt, rs, rt) {
    if (starts === rs.length) {
        
    }else {
        for (let i = starts; i < rs.length; i++) {
            for (let j = startt; j < rt.length; j++) {
                if (rs[starts] === rt[start]) {
                    dfs(i + 1, j + 1, rs, rt);
                }else{
                    dfs(i, j + 1, rs, rt);
                }
            }
        }
    }
}

let s  = 'abc'
let t = 'ahbgdc'

console.log(isSubsequence(s, t))