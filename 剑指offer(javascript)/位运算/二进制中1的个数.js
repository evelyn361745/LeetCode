function NumberOf1(n)
{
    // write code here
    let cnt = 0;
    if (n > 0) {
        let str = [];
        while (n > 0) {
            let t = n % 2;
            if (t === 1)
                cnt++
            str.push(t);
            n = parseInt(n / 2);
        }
    }else if (n < 0) {
        n = Math.abs(n);
        let str = [];
        let flag = true;
        while (n > 0) {
            let t = n % 2;
            str.push(t);
            n = parseInt(n / 2);
        }
        while (str.length < 31)
            str.push(0);
        //console.log(str)
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 1 && flag) {
                cnt++;
                flag = false;
            }
            if (str[i] === 0 && !flag) {
                cnt++;
            }
        }
        if (str.length < 32)
            cnt++;
    }
    return cnt;
}

let n = -2147483648;
console.log(NumberOf1(n));
