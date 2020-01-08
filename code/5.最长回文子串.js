/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        let L = i
        let R = s.length - 1;
        let curLen = 0;
        while (L <= R) {
            if (s[L] === s[R]) {
                if (L === R)
                    curLen = curLen + 1;
                else
                    curLen = curLen + 2;
                L++;
                R--;
            }else {
                R--;
            }
        }
        if (curLen > maxLen)
            maxLen = curLen;
    }
    return maxLen;
};

let s = "babad"
console.log(longestPalindrome(s))