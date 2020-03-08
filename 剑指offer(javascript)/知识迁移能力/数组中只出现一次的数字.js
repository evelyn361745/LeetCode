function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let l = 0,
        r = 1,
        res = [];
    if (array.length === 0)
        return [];
    array.sort(function (a, b) {
        return a - b;
    })
    while (r < array.length) {
        if (array[l] === array[r]) {
            l = l + 2;
            r = r + 2;
        }else {
            res.push(array[l]);
            l++;
            r++;
        }
    }
	if (l === array.length - 1)
		res.push(array[l]);
    return res;
}
let array = [1,3,1,2,3,4,5,4,5,6]
console.log(FindNumsAppearOnce(array));

function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}
