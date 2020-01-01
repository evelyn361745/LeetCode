/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const tmp = [];
    for (let j = 0; j < ratings.length; j++) {
        tmp.push(1);
    }
    dfs(tmp,ratings)
    dfs(tmp.reverse(), ratings.reverse());
    return sum(tmp);
};
function dfs(tmp, ratings) {
    for (let i = 0; i < ratings.length; i++) {
        if (i === 0) {
            if (ratings[i] > ratings[i + 1]) {
                tmp[i] = Math.max(tmp[i],tmp[i + 1] + 1);
            }
        }
        else if (i === ratings.length - 1) {
            if (ratings[i] > ratings[i - 1]) {
                tmp[i] = Math.max(tmp[i], tmp[i - 1] + 1);
            }
        }
        else {
            if (ratings[i] > ratings[i - 1])
                tmp[i] = Math.max(tmp[i], tmp[i - 1] + 1);
            if (ratings[i] > ratings[i + 1]) {
                tmp[i] = Math.max(tmp[i], tmp[i + 1] + 1)
            }
        }
    }
}
function sum(arr) {
    return eval(arr.join("+"));
}
let ratings = [1,2,87,87,87,2,1];
console.log(candy(ratings))