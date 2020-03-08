function LeftRotateString(str, n) {
    if(!str || n < 0 || n > str.length) {
        return ''
    }
    return str.slice(n) + str.slice(0, n)
}
let str = "abcXYZdef";
console.log(LeftRotateString(str, 3))

function LeftRotateString(str, n) {
    if (!str || str.length < 1) return '';
    var len = str.length;
    if (len < n) n %= len;
    return str.substring(n)+str.substr(0, n);
}
