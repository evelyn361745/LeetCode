function FindGreatestSumOfSubArray(array)
{
    // write code here
	// 方法一，暴力搜索
    let i = 0,
        n = array.length,
        maxVal = array[0];
    for (i = 0; i < n; i++) {
        let tmpsum = array[i];
		if (tmpsum > maxVal)
			maxVal = tmpsum;
        let j = i + 1;
        while (j < n) {
            tmpsum += array[j];
            if (tmpsum > maxVal)
                maxVal = tmpsum;
            j++;
        }
    }
    return maxVal;
}

let arr = [-2,-8,-1,-5,-9];
console.log(FindGreatestSumOfSubArray(arr));

function FindGreatestSumOfSubArray(array)
{
    // write code here
    let max = array[0];
    let pre = array[0];
    for (let i = 1; i < array.length; i++) {
        if (pre < 0)
            pre = 0;
        max = Math.max(max, pre + array[i]);
        pre = pre + array[i];
    }
    return max;
}
