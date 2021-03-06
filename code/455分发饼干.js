/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(sortNumber);
    s.sort(sortNumber);
    let cnt = 0;
    while(g) {
        if(s[0] >= g[0]) {
            cnt++;
            s.shift();
            g.shift();
        }
        else if(s[0] < g[0] && s){
            s.shift();
        }
        else {
            break;
        }
    }
};
function sortNumber(a,b)
{
    return a - b;
}
let g = [10,9,8,7]
let s = [5,6,7,8]
console.log(findContentChildren(g, s))