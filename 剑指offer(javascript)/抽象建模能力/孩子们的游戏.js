function LastRemaining_Solution(n, m)
{
    // write code here
    if (n === 0)
        return -1;
    let p = 0,
        list = [];
    for (let i = 0; i < n; i++)
        list.push(i);
    let cnt = 0;
    while(list.length !== 1) {
        let t = (m - 1) % list.length;
        let l = list.slice(0, t),
            r = list.slice(t+1)
        list = r.concat(l);
    }
    return list[0];
}

function LastRemaining_Solution(n, m)
{
    // 用数学归纳法推导出递推公式，
    // 设有n个人（编号0~(n-1))，从0开始报数，报到(m-1)的退出，剩下的人继续从0开始报数。
    // 令f[i]表示i个人时最后胜利者的编号，则有递推公式：
    // f[1]=0;
    // f[i]=(f[i-1]+m)%i; (i>1)
    // 检查输入
    if(n < 1 || m < 1){
        return -1;
    }
  
    let last = 0;
    for(let i = 2; i <= n; i++){
        last = (last + m)%i;
    }
    return last;
}
