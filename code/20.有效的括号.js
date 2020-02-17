/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0)
        return true;
    let temp = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            temp.push(s[i])
        }
        else if (s[i] == '}') {
            if (temp[temp.length - 1] === '{') 
                temp.pop();
            else
                return false;
        }
        else if (s[i] === ']') {
            if (temp[temp.length - 1] === '[')
                temp.pop();
            else 
                return false;
        }else {
            if (temp[temp.length - 1] === '(')
                temp.pop();
            else
                return false
        }
    }
    if (temp.length === 0)
        return true;
    else
        return false;
};

let s = "()";
console.log(isValid(s))
