/*
* 题目描述
* 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
*（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
*/
function multiply(array)
{
    // write code here
    let B = [];
    for (let i = 0; i < array.length; i++) {
        let tmp1 = array.slice(0, i);
        let tmp2 = array.slice(i + 1, array.length)
        let t = mu(tmp1) * mu(tmp2);
        B.push(t)
    }
    return B;
}

    function mu(array) {
        if (array.length === 0) {
            return 1;
        }else {
            return array.reduce(function(a, b) {
                return a * b;
            })
        }
    }

    let A = [0,1,2,3,4]
    console.log(multiply(A))
