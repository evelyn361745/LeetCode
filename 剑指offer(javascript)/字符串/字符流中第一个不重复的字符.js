/*
题目描述
请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
输出描述:
如果当前字符流没有存在出现一次的字符，返回#字符。
*/
//Init module if you need
let map = new Map();
let str = "";
function Init()
{
    // write code here    
    map = new Map();
    str = "";
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    str += ch
    if (map.has(ch))
        map.set(ch, map.get(ch) + 1);
    else 
        map.set(ch, 1);
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for (let i = 0; i < str.length; i++) {
        if (map.get(str[i]) === 1)
            return str[i]
    }
    return '#'
}