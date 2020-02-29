function Power(base, exponent)
{
    // write code here
    if (base === 0)
        return 0;
    if (exponent === 0)
        return 1;
    let res = 1;
    let x = Math.abs(exponent);
    for (let i = 0; i < x; i++){
        res = res * base;
    }
    return (exponent > 0) ? res : 1 / res;
}

function Power(base, exponent)
{
    return Math.pow(base, exponent);
}
let base = 2, exponent = -3;
console.log(Power(base, exponent));
