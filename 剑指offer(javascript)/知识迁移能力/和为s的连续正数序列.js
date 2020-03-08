function FindContinuousSequence(sum)
{
    // write code here
    // 穷举
    let res = []
    for (let i = 1; i < sum; i++) {
        let tmpsum = 0,
            j = i;
        while (tmpsum < sum) {
            tmpsum += j;
            j++
        }
        if (tmpsum === sum) {
            let arr = [];
            for (let k = i; k < j; k++) {
                arr.push(k)
            }
            res.push(arr)
        }
    }
    return res
}

function FindContinuousSequence(sum)
{
    // write code here
    // 双指针
    let res = [];
    if (sum < 0)
        return []
    let l = 1,
        r = 2,
        sumVal = l + r;
    while (sum > r) {
        if (sumVal <sum) { // 小于sum，移动右指针
            r++;
            sumVal += r;
        }else if (sumVal > sum) {// 大于sum，sum减去左指针，并移动左指针
            sumVal -= l;
            l++;
        }else {//相等，则遍历l，r之间数组
            let tmp = [];
            for (let i = l; i <= r; i++) {
                tmp.push(i)
            }
            res.push(tmp)
            r++;
            sumVal += r;
        }
    }
    return res;
}
