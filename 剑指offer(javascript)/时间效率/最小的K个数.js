function GetLeastNumbers_Solution(input, k)
{
    // write code here
    if (k < 0 || k > input.length)
        return 0;
    input.sort(function(a,b) {
        return a - b;
    });
    console.log(input)
    return input.slice(0, k);
}
console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],4));
