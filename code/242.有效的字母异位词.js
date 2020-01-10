/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    else{
        let tArr = t.split('');
        for (let i = 0; i< s.length; i++) {
            if (tArr.includes(s[i])) {
                tArr.splice(tArr.indexOf(s[i]), 1)
            }else
                return false;
        }
        return true;
    }
};
let s = "", t = "";
console.log(isAnagram(s, t))