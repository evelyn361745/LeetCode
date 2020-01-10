/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let smap = new Map(),
        tmap = new Map();
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (smap.has(s[i]))
            smap.set(s[i], smap.get(s[i]) + 1)
        else
            smap.set(s[i], 1)
    }
    for (let i = 0; i < t.length; i++) {
        if (tmap.has(t[i]))
            tmap.set(t[i], tmap.get(t[i]) + 1)
        else
            tmap.set(t[i], 1)
    }
    tmap.forEach(function(value, key) {
        if (smap.has(key) && smap.get(key) !== tmap.get(key))
            res = key;
        else if (!smap.has(key))
            res = key;
    })
    return res;
};
let s = "abcd", t = "abcde";
console.log(findTheDifference(s, t))