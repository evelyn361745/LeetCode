/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charMap = new Map();
    let cnt = 0;
    for (let i = 0; i < chars.length; i++) {
        if (charMap.has(chars[i]))
            charMap.set(chars[i], charMap.get(chars[i]) + 1);
        else
            charMap.set(chars[i], 1);
    }
    for (let i = 0; i < words.length; i++) {
        let curword = words[i].split('')
        let temp = new Map([...charMap]);
        let ok = true;
        for (let j = 0; j < curword.length; j++) {
            if (temp.has(curword[j]) && temp.get(curword[j]) !== 0)
                temp.set(curword[j], temp.get(curword[j]) - 1)
            else{
                ok = false;
                break;
            }
        }
        if (ok) {
            cnt = cnt + curword.length;
        }
    }
    return cnt;
};
let words = ["hello","world","leetcode"], chars = "welldonehoneyr";
console.log(countCharacters(words, chars))
