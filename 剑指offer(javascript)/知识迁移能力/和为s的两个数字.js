function FindNumbersWithSum(array, sum)
{
    // write code here
    let res = [];
    let minVal = Number.MAX_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (i !== 0 && array[i] === array[i - 1])
            continue;
        else {
            let other = sum - array[i];
            if (array.indexOf(other) !== -1) {
                let tmp = array[i] * other;
                if (tmp < minVal) {
                    res = [];
                    res.push(array[i]);
                    res.push(other)
                }
            }
        }
    }
    res.sort(function(a, b){
        return a - b;
    })
    return res;
}
