/**
 * 题目描述
* 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
*  在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 */
//s, pattern都是字符串

/* 分析：
* 考虑多种情况：
1. 两个字符串都为空，返回true
2. 当第一个字符串不空，而模板字符串为空，返回false
3. 当都一个字符串为空，而模板字符串非空，可能匹配成功也可能匹配失败。例如模板字符串为”a*a*a*“
4. 当开始匹配第一个字符，考虑模板字符串下一个字符可能为”*“或不为”*“：
  &当pattern下一个字符不为”*“时，直接匹配当前字符。如果匹配成功，继续匹配下一个；如果匹配失败，直接返回false。除了两个字符相同的情况，还需考虑模板字符串为
  ”.“时，同时str的当前字符不为空
  &pattern下一个字符为”*“时，稍微复杂些，因为”*“可以表示0个或多个
      ……当”*“匹配0个字符时，str当前字符不变，pattern当前字符后移两位，跳过”* “这个符号；
      ……当”*“匹配1个或多个时，str当前字符移向下一个，pattern当前字符不变
*/

function match(s, pattern)
{
    return matchCore(s, 0, pattern, 0);
}
function matchCore(s, i, pattern, j) {
    // 字符串和模式串都为空
    if (i === s.length && j === pattern.length)
        return true;
    // 字符串不为空，模式串为空
    if (i !== s.length && j === pattern.length)
        return false;
    if(pattern[j + 1] === '*') {
        if (pattern[j] === '.' && i !== s.length || pattern[j] === s[i]) {
            return matchCore(s, i + 1, pattern, j + 2) || matchCore(s, i + 1, pattern, j) || matchCore(s, i, pattern, j + 2)
        }
        return matchCore(s, i, pattern, j + 2);
    }
    if (s[i] === pattern[j] || pattern[j] === '.' && i !== s.length)
        return matchCore(s, i + 1, pattern, j + 1);
    return false;
}

function match(s, pattern)
{
    let res = new RegExp(`^${pattern}$`);
    return res.test(s);
}
let s = "aaa"
let pattern = ".*"
console.log(match(s, pattern))