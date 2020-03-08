function Sum_Solution(n)
{
    // write code here
    // 短路求值，不断递归，当n < 0时停止递归
    let sum = n;
    (n > 0) && (sum += Sum_Solution(n - 1));
    return sum;
}
