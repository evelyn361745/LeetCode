/**
 * @param {string} s
 * @return {string}
 */
//计算回文子串长度
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

//动态规划
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function(s) {
    let maxLen =  '';
    for (let i = 0; i < s.length; i++) {
        let R  = s.length;
        //console.log(R)
        while(R > i) {
            if (judgement(s, i, R- 1)) {
                let temp = s.slice(i, R);
                //console.log(temp);
                if (temp.length > maxLen.length) {
                    maxLen = temp;
                }
                break;
            }else {
                R--;
            }
       }
    }
    return maxLen;
};

function judgement(s,  i,  j) {
    if ( i === j) {
        return true;
    }else {
        if (s[i] !== s[j]) {
            return false;
        }else {
            if ((i +1) !== j ) {
                if (judgement(s, i+1, j-1))
                    return true;
                else
                    return false;
            }
            else {
                return true;
            }
        }
    }
}



//中心扩展算法
var longestPalindrome = function(s) {
    if (s.length < 1)
        return "";
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i+1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - parseInt((len - 1) / 2);
            end = i + parseInt(len / 2);
        }
    }
    return s.slice(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    let L = left, R = right;
    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    return R-L-1;
}

let s = "babad"
console.log(longestPalindrome(s))

