function Add(num1, num2)
{
    // write code here
    // 在计组中，半加器、全加器中：
    // 两个二进制的相加结果是用一个异或门实现的；
    // 两个二进制的进位结果是用一个与门来实现的。
    var sum, carry;
    while (carry !== 0) {
        sum = num1 ^ num2; // 求和
        carry = (num1 & num2) << 1; // 进位
        num1 = sum;
        num2 = carry;
    }
    return sum;
}
