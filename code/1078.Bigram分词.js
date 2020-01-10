/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let res = [];
    let textArr = text.split(' ');
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] === first) {
            if (i < (textArr.length - 2) && textArr[i + 1] === second)
                res.push(textArr[i + 2])
        }
    }
    return res;
};
let text = "we will we will rock you", first = "we", second = "will";
console.log(findOcurrences(text, first, second))