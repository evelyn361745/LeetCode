/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let res = [];
    let rs = s.split('');
    let rt = t.split('');
    dfs(0, 0, [], res, rs, rt)
};

function dfs(starts, startt, temp, res, rs, rt) {
    if (true) {
        
    }else {
        for (let i = starts; i < rs.length; i++) {
            for (let j = startt; j < rt.length; j++) {
                if (rs[i] === rt[j])
            }
        }
    }

}