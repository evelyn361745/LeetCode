function IsPopOrder(pushV, popV)
{
    // write code here
    let list = [];
    while (pushV.length > 0) {
        if (pushV[0] !== popV[0]) {
            list.push(pushV[0])
            pushV.shift();
        }else {
            popV.shift();
            pushV.shift();
            while(list[list.length - 1] === popV[0] && list.length > 0 && popV.length > 0) {
                list.pop();
                popV.shift();
            }
        }
    }
    while (list.length > 0) {
        if (list[list.length - 1] === popV[0]) {
            list.pop();
            popV.shift();
        }else {
            return false;
        }
    }
    return true;
}

let pushV = [1,2,3,4,5], popV = [4, 3, 5, 1, 2];
console.log(IsPopOrder(pushV, popV));
