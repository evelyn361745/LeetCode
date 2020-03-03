/*function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let str = i.toString();
        if (str.indexOf("1") !== -1) {
            for (let j = 0; j < str.length; j++) {
                if (str[j] === "1")
                    res++;
            }
        }
    }
    return res;
}*/
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var counts,num;
    counts = 0;
    if(n < 1){
        return 0;
    }
    for(var i = 1;i <= n;i++){
        num = i;
       //num = num%10;
        while(num > 0){
            if(num%10 == 1){
                counts++;
            }
            num = Math.floor(num/10);
        }
    }
    return counts;
}

let n = 13;
console.log(NumberOf1Between1AndN_Solution(n));
