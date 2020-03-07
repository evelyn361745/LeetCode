function GetUglyNumber_Solution(index)
{
    // write code here
    // 丑数能够分解成2^x3^y5^z,所以只需要把得到的丑数不断地乘以2、3、5之后并放入他们应该放置的位置即可，
    // 个指针会逐渐遍历整个数组，因此最终数组中的每一个值都会被乘以2、乘以3、乘以5，也就是实现了我们最开始的想法，只不过不是同时成乘以2、3、5，而是在需要的时候乘以2、3、5.
    if (index === 0)
        return 0;
    let two = 0,
        three = 0,
        five = 0,
        numbers = [1];
    for (let i = 1; i < index; i++) {
        numbers[i] = Math.min(numbers[two] * 2, numbers[three] * 3, numbers[five] * 5);
        if (numbers[i] === numbers[two] * 2)
            two++;
        if (numbers[i] === numbers[three] * 3)
            three++;
        if (numbers[i] === numbers[five] * 5)
            five++;
    }
    return numbers[index - 1];
}

let index = 10;
console.log(GetUglyNumber_Solution(index));
