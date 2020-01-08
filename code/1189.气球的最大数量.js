/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    n = text.length,
    temple = ['b', 'a', 'l', 'o', 'n'];
    let sMap = new Map();
    for (let i = 0; i < n; i++) {
        if (sMap.has(text[i])) {
            sMap.set(text[i], sMap.get(text[i]) + 1);
        }else{
            sMap.set(text[i], 1);
        }
    }
    let minVal = 100000;
    for (let j = 0; j < temple.length; j++) {
        if (sMap.has(temple[j])) {
            let x = 0;
            if (temple[j] === 'l' || temple[j] === 'o') {
                x = parseInt(sMap.get(temple[j]) / 2);
            }else {
                x = sMap.get(temple[j])
            }
            if (x < minVal)
                minVal = x;
        }else {
            return 0;
            break;
        }
    }
    if (minVal !== 100000)
        return minVal;
};

let text = "leetcode"
console.log(maxNumberOfBalloons(text));