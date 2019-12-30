/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let rs = s.split('');
    let rt = t.split('');
    let i = 0;
    while(rs[0]) {
        let x = rt.indexOf(rs[0])
        if(x !== -1) {
            rs.pop(0);
            rt.slice(0, x + 1);
        }else{
            return false
        }
    }
    return true;
};

let s  = 'abc'
let t = 'ahbgdc'

console.log(isSubsequence(s, t))