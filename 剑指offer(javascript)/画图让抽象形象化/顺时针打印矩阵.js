function printMatrix(matrix)
{
    // write code here
    let row = matrix.length,
        col = matrix[0].length;
    let res = [];
    if (row === 0 || col === 0)
       return res;
    let left = 0,
        top = 0,
        right = col - 1,
        bottom = row - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++)
            res.push(matrix[top][i]);
        for (let i = top + 1; i <= bottom; i++)
            res.push(matrix[i][right]);
        if(top != bottom) {
            for (let i = right - 1; i >= left; i--)
                res.push(matrix[bottom][i])
        }
        if (left != right) {
            for (let i = bottom - 1; i > top; i--)
                res.push(matrix[i][left]);
        }
        left++, top++, right--, bottom--;
    }
    return res;
}
