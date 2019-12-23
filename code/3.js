/**
 * @param {string} s
 * @return {number}
 */
s = " ";

var lengthOfLongestSubstring1 = function(s) {
    let number = 0;
    for (let i = 0; i < s.length; i++) {
        let map = new Map();
        let count = 1;
        if (!map.has(s[i]))
            map.set(s[i], i);
        for (let j = i + 1; j < s.length; j++) {
            if (map.has(s[j])) {
                break;
            }else {
                count++;
                map.set(s[j], j);
            }
        }
        number = (number > count)?number:count
    }
    return number
};

/**
 * 利用滑动窗口，遍历字符串时，依次将字符装入数组res，若遇到字符在res中已经存在，获取数组中当前字符的下标，并将其与其前面存入的字符删除。
 * 并更新最大number
 */
var lengthOfLongestSubstring = function(s) {
    let number = 0;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (res.indexOf(s[i]) === -1) {
            res.push(s[i]);
        }else {
            let m = res.indexOf(s[i]);
            number = (number > res.length) ? number : res.length;
            res = res.slice(m + 1);
            res.push(s[i]);
        }
    }
    number = (number > res.length) ? number : res.length;
    return number;
}

console.log(lengthOfLongestSubstring(s))