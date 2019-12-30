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
        }
        else if{
            else {
            break;
        }
    }
};
let g = [10,9,8,7]
let s = [5,6,7,8]
console.log(findContentChildren(g, s))