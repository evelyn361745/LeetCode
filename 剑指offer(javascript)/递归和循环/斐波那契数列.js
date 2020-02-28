function Fibonacci(n)
{
    // write code here
    let f = [0,1];
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n]
}
let n = 2;
console.log(Fibonacci(n));
