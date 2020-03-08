function GetNumberOfK(data, k)
{
    // write code here
    let cnt = 0,
        l = 0,
        r = data.length - 1;
    while (l < r) {
        if (data[l] < k)
            l++;
        else if (data[l] === k){
            cnt++;
            l++;
        }
        if (data[r] > k)
            r--;
        else if (data[r] === k) {
            cnt++;
            r--;
        }
    }
    if (l === r && data[l] === k)
        cnt++;
    return cnt;
}
