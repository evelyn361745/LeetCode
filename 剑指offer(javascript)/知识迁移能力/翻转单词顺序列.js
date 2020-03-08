function ReverseSentence(str)
{
    // write code here
    let newstr = [];
    let arr = str.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
        newstr.push(arr[i]);
    }
    return newstr.join(" ");
}

function ReverseSentence(str)
{
    // write code here
    return str.split(" ").reverse().join(" ");
}
