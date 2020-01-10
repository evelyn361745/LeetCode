/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let map = new Map();
    let Aarr = A.split(' '),
        Barr = B.split(' ');
    let res = [];
    Aarr.forEach(item => {
        if (map.has(item))
            map.set(item, map.get(item) + 1)
        else
            map.set(item, 1)
    })
    Barr.forEach(item => {
        if (map.has(item))
            map.set(item, map.get(item) + 1)
        else
            map.set(item, 1)
    })
    map.forEach(function(value, key){
        if (value === 1)
            res.push(key)
    })
    return res
};

let A = "this apple is sweet", B = "this apple is sour";
console.log(uncommonFromSentences(A, B))