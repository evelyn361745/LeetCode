function jumpFloorII(number)
{
    // write code here
    let f = [0, 1, 2];
    for (let i = 3; i <= number; i++) {
        let tmp = 0;
        for (let j = 0; j < i; j++) {
            tmp += f[j]
        }
        f[i] = tmp + 1;
    }
    return f[number]
}
