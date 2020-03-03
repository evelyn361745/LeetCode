/*function PrintMinNumber(numbers)
{
    // write code here
    // 深度搜索，列出所有的全排列，暴力搜索
    let res = [],
        n = numbers.length,
        maxVal = [Number(numbers.join(""))];
    if (n === 0)
        return ""
    DFS(numbers, [],0, maxVal, n, [])
    return maxVal[0];
}
function DFS(numbers, tmp, t, maxVal, n, visit) {
    if (tmp.length === n) {
        let f = Number(tmp.join(""))
        if (f < maxVal){
			maxVal.pop();
			maxVal.push(f);
		}
    }else {
        for (let i = 0; i < n; i++) {
            if (visit.indexOf(i) === -1) {
                tmp.push(numbers[i]);
				visit.push(i);
                DFS(numbers, tmp, i, maxVal, n,visit)
            }
        }
    }
    tmp.pop();
    visit.pop();
}*/
function PrintMinNumber(numbers)
{
    // write code here
    //  先将numbers按从大到小进行排序，比较a和b
    numbers.sort(compare);
	return numbers.join("");
}

function compare(a, b) {
    let str1 = Number(a + "" + b),
        str2 = Number(b + "" + a);
    if (str1 > str2)
        return 1;
    else
        return -1;
}

let numbers = [3,321,32];
console.log(PrintMinNumber(numbers));
