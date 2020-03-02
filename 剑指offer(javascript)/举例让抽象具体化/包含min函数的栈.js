let list = [];
function push(node)
{
    // write code here
    list.push(node);
}
function pop()
{
    // write code here
    let x = list.pop();
    return x;
}
function top()
{
    // write code here
    return list[list.length - 1];
}
function min()
{
    // write code here
    if (list.length === 0)
        return null;
    let min = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min)
            min = list[i];
    }
    return min;
}
