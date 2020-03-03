function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    // 方法一，利用hashmap
    let map = new Map();
    let n = parseInt(numbers.length / 2);
    for (let i = 0; i < numbers.length; i++) {
        let t = 0;
        if (map.has(numbers[i])) {
            t = map.get(numbers[i]) + 1;
            map.set(numbers[i], t);
            
        }
        else {
            t = 1;
            map.set (numbers[i], 1);
        }
        if (t > n)
            return numbers[i];
    }
    return 0;
}

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    // 方法二，遍历整个数组，统计次数，当值与num相等，个数加一，否则减一，找到次数最多的num。并验证个数是否大于数组长度一半
    if (numbers.length === 0)
        return 0;
    let num = numbers[0],
        cnt = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === num) {
            cnt++;
        }else {
            cnt--;
        }
        if (cnt === 0) {
            num = numbers[i];
            cnt = 1;
        }
    }
    cnt = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num)
            cnt++;
    }
    if (cnt * 2 > numbers.length)
        return num;
    else 
        return 0;
}
