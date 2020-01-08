/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let number = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.includes(S[i]))
            number = number + 1;
    }
    return number
};
let J = "aA", S = "aAAbbbb"
console.log(numJewelsInStones(J, S))