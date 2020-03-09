function movingCount(threshold, rows, cols)
{
    // write code here
    let status = [];
    for (let i = 0; i < rows; i++) {
        let tmp = [];
        for (let j = 0; j < cols; j++) {
            tmp.push(false);
        }
        status.push(tmp);
    }
    return DFS(threshold, rows, cols, 0, 0, status);
}

function DFS(threshold, rows, cols, row, col, status) {
    if (row < 0 || row === rows || col < 0 || col === cols || status[row][col])
        return 0;
    var sum = _sum(row+""+col);
    if (sum > threshold)
        return 0
    status[row][col] = true;
    return 1 + DFS(threshold, rows, cols, row - 1, col, status) +
        DFS(threshold, rows, cols, row + 1, col, status) + 
        DFS(threshold, rows, cols, row, col - 1, status) +
        DFS(threshold, rows, cols, row, col + 1, status)
}

function _sum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i]);
    }
    return sum;
}

console.log(movingCount(5, 10, 10))
