/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let res = [],
    s1 = 'qwertyuiop',
    s2 = 'asdfghjkl',
    s3 = 'zxcvbnm';
    for (let i = 0; i < words.length; i++) {
        let curword = words[i].toLowerCase().split('');
        let flag = 0;
        let oflag = true;
        let j = 1;
        if (s1.includes(curword[0]))
            flag = 1;
        else if (s2.includes(curword[0]))
            flag = 2;
        else if(s3.includes(curword[0]))   
            flag = 3; 
        while (j < curword.length) {
            if (flag === 1 && s1.includes(curword[j])){
                j++;
                continue
            }
            else if (flag === 2 && s2.includes(curword[j])){
                j++;
                continue
            }
            else if (flag === 3 && s3.includes(curword[j])){
                j++;
                continue
            }
            else{
                oflag = false;
                break
            }
        }
        if (oflag)
            res.push(words[i])
    }
    return res;
};
let words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words))