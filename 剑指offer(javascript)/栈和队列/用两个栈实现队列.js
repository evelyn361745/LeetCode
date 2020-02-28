let arr = [];
let outarr = [];
function push(node)
{
    // write code here
    arr.push(node);
};
function pop()
{
    // write code here
    // 法一
    /*return arr.shift();*/
    // 法二
    if (!outarr.length) {
        while(arr.length) {
            outarr.push(arr.pop());
        }
    }
    return outarr.pop();
}
