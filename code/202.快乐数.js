/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let s = new Set();
    s.add(1);
    while (!s.has(n)) {
        s.add(n);
        n = sum(n);
    }
    return n===1
};
function sum(n) {
    let arr = String(n).split('')
    let s = [];
    for (let i = 0; i < arr.length; i++) {
        s.push(parseInt(arr[i]) * parseInt(arr[i]))
    }
    return eval(s.join("+"))
}
let n = 19;
console.log(isHappy(n))