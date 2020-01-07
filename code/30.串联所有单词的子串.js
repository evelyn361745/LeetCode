/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (s.length === 0 || words.length === 0)
        return []
    else {
        let words_num = words.length, // 单词的个数
        word_len = words[0].length, // 每个单词的长度
        res = [],  //记录s中包含word子串的起始位置，最后的返回结果
        hashwords = new Map(); //存储words中单词的个数
        for (let j = 0; j < words_num; j++) {
            if (hashwords.has(words[j])) {
                hashwords.set(words[j], hashwords.get(words[j]) + 1)
            }else {
                hashwords.set(words[j], 1)
            }
        }
        //console.log(hashwords);
        // 对s每个起始位置进行遍历
        for (let i = 0; i < s.length - word_len * words_num + 1; i++) {
            let hashmap = new Map(), // 新建一个map， 若满足hashmap与hashwords一致，则保存结果
            curnum = 0;
            while (curnum < words_num) {
                let tmp = s.slice(i + curnum * word_len, i + (curnum + 1) * word_len); // 截取s子串
                if (hashwords.has(tmp)) { // 若在hashmap中存在， 更新value值
                    if (hashmap.has(tmp))
                        hashmap.set(tmp, hashmap.get(tmp) + 1);
                    else 
                        hashmap.set(tmp, 1);
                    if (hashmap.get(tmp) > hashwords.get(tmp)) { // 判断 hashwords中
                        break;
                    }
                }else {
                    break;
                }
                curnum++;
            }
            if (curnum === words_num)
                res.push(i);
        }
        return res;
    }
};
let s = "barfoothefoobarman", words = ["foo","bar"];
console.log(findSubstring(s, words))