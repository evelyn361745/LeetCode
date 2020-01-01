/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(sum(gas) < sum(cost)) {
        return -1;
    }else {
        let startP = [];
        for (let i = 0; i < gas.length; i++) {
            if (gas[i] >= cost[i]) // 找到起点站，起点站i满足当前加油站的油量大于去往i+1站所需要消耗的油量即cost[i]
                startP.push(i);
        }
        let n = gas.length;
        for (let j = 0; j < startP.length; j++) {
            let tmp = 0;
            tmp = gas[startP[j]] - cost[startP[j]];
            let star = startP[j] + 1;
            let tr = true;
            while (star !== startP[j]) {
                if (star === n){
                    star = 0;
                }
                tmp += gas[star];
                if (tmp >= cost[star]) {
                    tmp -= cost[star];
                    star++;
                    if (star === n){
                        star = 0;
                    }
                }else {
                    tr = false;
                    break;
                }
            }
            if (tr) {
                return startP[j];
            }
        }
        return -1;
    }
};
function sum(arr) {
    return eval(arr.join('+'))
}
let gas = [3,1,1];
let cost = [1,2,2];
console.log(canCompleteCircuit(gas, cost));