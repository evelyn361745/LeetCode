
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let res = [];
    for (let i = 0; i < S.length; i++) {
        if ('0' <= S[i] && S[i] <= '9') {
            if (res.length === 0) 
                res.push(S[i])
            else {
                for (let j  = 0; j < res.length; j++) {
                    res[j] += S[i];
                }
            }
        }
        else {
            let tmp = [...res];
            if (tmp.length === 0) {
                res.push(S[i].toLowerCase());
                res.push(S[i].toUpperCase());
            }
            for (let j = 0; j < tmp.length; j++) {
                let item1 = tmp[j] + S[i].toLowerCase();
                let item2 = tmp[j] + S[i].toLowerCase().toUpperCase();
                if (j == 0)
                    res.splice(j, 1, item1, item2);
                else
                    res.splice(2 * j, 1, item1, item2);
            }
        }
    }
    return res;
};

let S = "mQe";
console.log(letterCasePermutation(S))