/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort();
    s.sort();
    let cnt = 0;
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if(s[j] >= g[i]) {
                cnt++;
            }else {
                break;
            }
        }
    }
};
let g = [3,2,1]
let s = [3,1]
console.log(findContentChildren(g, s))