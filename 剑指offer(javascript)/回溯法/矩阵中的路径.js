function hasPath(matrix, rows, cols, path)
{
    // write code here
    if (path.length === 0)
        return true;
    if (rows * cols < path.length || rows < 0 || cols < 0)
        return false;
    let flag = [],
        res = []; // 标记数组
    for (let i = 0; i < rows; i++) {
        flag.push([])
        for (let j = 0; j < cols; j++) {
            flag[i][j] = false;
        }
    }
    let tmp = [];
    for (let i = 0; i < matrix.length; i++) {
		tmp.push(matrix[i])
        if (tmp.length === cols) {
            res.push(tmp);
            tmp = [];
        }
    }
    // 找到第一个符合path的
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (res[i][j] === path[0]) {
                if (path.length === 1)
                    return true;
                flag[i][j] = true;
                if (DFS(res, rows, cols, i, j, path.slice(1), flag))
                    return true;
                flag[i][j] = false;
            }
        }
    }
    return false;
}

function DFS (res, rows, cols, row, col, path, flag) {
    if (row > 0 && res[row - 1][col] === path[0] && !flag[row - 1][col]) {
        if (path.length === 1)
            return true;
        flag[row - 1][col] = true;
        if (DFS(res, rows, cols, row - 1, col, path.slice(1), flag))
            return true;
        flag[row - 1][col] = false;
    }
    if (row < rows - 1 && res[row + 1][col] === path[0] && !flag[row + 1][col]) {
        if (path.length === 1)
            return true;
        flag[row + 1][col] = true;
        if (DFS(res, rows, cols, row + 1, col, path.slice(1), flag))
            return true;
        flag[row + 1][col] = false;
    }
    if (col > 0 && res[row][col - 1] === path[0] && !flag[row][col - 1]) {
        if (path.length === 1)
            return true;
        flag[row][col - 1] = true;
        if (DFS(res, rows, cols, row, col - 1, path.slice(1), flag))
            return true;
        flag[row][col - 1] = false;
    }
    if (col < cols - 1 && res[row][col + 1] === path[0] && !flag[row][col + 1]) {
        if (path.length === 1)
            return true;
        flag[row][col + 1] = true;
        if (DFS(res, rows, cols, row, col + 1, path.slice(1), flag))
            return true;
        flag[row][col + 1] = false;
    }
    return false;
}

let matrix = "abcesfcsadee",
rows = 3,
cols = 4,
path = "bcced";
console.log(hasPath(matrix, rows, cols, path))
