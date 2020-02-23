//s字符串
/*
* 数值的存在形式有以下几种：整数（正整数，负整数），整数.整数，（整数 or （整数.整数））（e or E）整数 ，
*/
function isNumeric(s)
{
    // write code here
    if (s === '')
        return false;
      // 首先以小数点“.”分割
    if (s.indexOf(".") === -1) {
        if (s.indexOf("e") === -1 && s.indexOf("E")  === -1){
            if (isNum(s) === -1) // 不是小数，也不是带e的数
                return false;
            else
                return true;
        }else {
            if (s.indexOf("e") === -1) { // 不是小数，带e
                let tmp = s.split("E");
                if (tmp.length !== 2)
                    return false;
                if (tmp[1] === "")
                    return false;
                // 以e分割，e后面不为空，也不为负整数，e前面必须是整数
                if (isNum(tmp[0]) !== -1 && isNum(tmp[1]) !== -1 && isNum(tmp[1]) !== 1)
                    return true;
                else
                    return false;
            }else {
                let tmp = s.split("e");
                if (tmp.length !== 2)
                    return false;
                if (tmp[1] === "")
                    return false;
                if (isNum(tmp[0]) !== -1 && isNum(tmp[1]) !== -1 && isNum(tmp[1]) !== 1)
                    return true;
                else
                    return false;
            }
        }
    }else {
        let tmp = s.split("."); // 判断小数
        if (tmp.length !== 2)
            return false;
        // 包含e，如125.45e+6，讨论以e分割是否满足
        if (tmp[1].indexOf('e') !== -1 && tmp[0] !== "" && isNum(tmp[0]) !== -1) {
            let t = tmp[1].split('e')
            if (t.length !== 2)
                    return false;
            if (t[1] === "")
                return false;
            if (isNum(t[0]) !== -1 && isNum(t[1]) !== -1 && isNum(tmp[1]) !== 1)
                return true;
            else
                return false;
        }
        if (tmp[1].indexOf('E') !== -1 && tmp[0] !== "" && isNum(tmp[0]) !== -1) {
            let t = tmp[1].split('E')
            if (t.length !== 2)
                    return false;
            if (t[1] === "")
                return false;
            if (isNum(t[0]) !== -1 && isNum(t[1]) !== -1 && isNum(tmp[1]) !== 1)
                return true;
            else
                return false;
        }
        if (isNum(tmp[0]) !== -1 && isNum(tmp[1]) === 2) // 小数点后面必须是正整数,且不带符号
            return true;
        else
            return false;
    }    
}
/*
* 判断当前数字是否是整数，如-1，+1, 1等
*/
function isNum(s) {
    if (s[0] === '-') {
        if (s.length < 1)
            return -1;
        for (let i = 1; i < s.length; i++) {
            if (s[i] < '0' || s[i]  > '9') 
                return -1;
        }
        return 0;
    }else  if (s[0] === '+'){
        if (s.length < 1)
            return -1;
        for (let i = 1; i < s.length; i++) {
            if (s[i] < '0' || s[i]  > '9') 
                return -1;
        }
        return 1
    }else {
        if (s.length === 0)
            return -1;
        if (s.length > 0){
            for (let i = 0; i < s.length; i++) {
                if (s[i] < '0' || s[i]  > '9') 
                    return -1;
            }
            return 2;
        }
    }
}
// 方法二：正则表达式匹配
function isNumeric(s)
{
    // write code here
    // 正则匹配，^表示以该模式串开头，$表示以该模式串结尾，
    // [-+]?    正负号后面的 ? 后缀表示这个负号是可选的,表示有0到1个负号或者正号
    // \\d*    \d的含义和[0-9]一样。它匹配一个数字。后缀 * 指引它可匹配零个或者多个数字。
    // (?:\\.\\d*)?    (?: …)?表示一个可选的非捕获型分组。* 指引这个分组会匹配后面跟随的0个或者多个数字的小数点。
    let pattern = new RegExp("^[-+]?\\d*(\\.\\d*)?([eE][+-]?\\d+)?$");
    return pattern.test(s);
}
let s = "1a3.14"
console.log(isNumeric(s))
