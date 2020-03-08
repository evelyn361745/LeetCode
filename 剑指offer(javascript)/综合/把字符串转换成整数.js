function StrToInt(str)
{
    // write code here
    if (str.length === 0)
        return 0;
    let tmp = str;
    if (str[0] === "+" || str[0] === "-")
        str = str.substring(1);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9')
            return 0;
        else {
            sum += Number(str[i]) * Math.pow(10, str.length - 1 - i)
        }
    }
    if (tmp[0] === '-'){
        if (-sum < -2147483648)
            return 0;
        else 
            return -sum;
    }
    else {
        if (sum > 2147483647)
            return 0;
        else 
            return sum;
    }
}
