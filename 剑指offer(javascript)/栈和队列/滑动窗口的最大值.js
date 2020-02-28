function maxInWindows(num, size)
{
    // write code here
    let res = [];
    if (0 < size && size < num.length) {
        for (let i = 0; i <= num.length - size; i++) {
            let tmp = num.slice(i, i + size);
            tmp.sort(function(a, b) {
                return a - b;
            });
            res.push(tmp[tmp.length - 1]);
        }
    }else if (size === num.length) {
        num.sort(function(a, b) {
		    return a - b;
		});
        res.push(num[num.length - 1])
    }
    return res;
}
let num = [1,3,5,7,9,11,13,15]
console.log(maxInWindows(num, 4));
