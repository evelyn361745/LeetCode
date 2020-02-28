function rectCover(number)
{
    // write code here
    let f = [0, 1, 2];
    for (let i = 3; i <= number; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[number]
}
