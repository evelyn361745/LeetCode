/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a = x.toString(2);
    let b = y.toString(2);
    let cnt = 0;
    let z = Math.max(a.length, b.length)
    if (a.length < z) {
        for (let i = a.length; i < z; i++) {
            a = '0' + a;
        }
    }else {
        for (let i = b.length; i < z; i++) {
            b = '0' + b;
        }
    }
    //console.log(a, b)
    for (let i = 0; i < z; i++) {
        if (a[i] !== b[i])
            cnt += 1;
    }
    return cnt;
};
