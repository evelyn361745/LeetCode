/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort(sortNumber);
    let n = stones.length;
    while(n > 1) {
        let x  = stones[stones.length - 1] - stones[stones.length - 2];
        if (stones[stones.length - 1] !== stones[stones.length - 2]) {
            stones.pop();
            stones.pop();
            stones.push(x);
        }else {
            stones.pop();
            stones.pop();
        }
        stones.sort(sortNumber);
        n = stones.length;
    }
    if(stones[0]) {
        return stones[0]
    }else {
        return 0
    }
};

function sortNumber (a, b) {
    return a - b;
}

let stones = [2,2];
console.log(lastStoneWeight(stones))