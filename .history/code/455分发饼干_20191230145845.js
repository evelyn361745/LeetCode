/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort();
    s.sort();
    let cnt = 0;
    while(g) {
        if(s[0] >= g[0]) {
            cnt++;
            s.shift();
            g.shift();
        }else {
            break;
        }
    }
};
let g = [3,2,1]
let s = [3,1]
console.log(findContentChildren(g, s))