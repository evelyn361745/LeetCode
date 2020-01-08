/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let mapRow = new Map();
        for (let j = 0; j < 9; j++) { // 判断每一行是否满足
            if (board[i][j] !== '.'){
               if (mapRow.has(board[i][j]))
                    return false;
                else
                    mapRow.set(board[i][j], 1) 
            }
        }
        let mapCross = new Map();
        for (let j = 0; j < 9; j++) { // 判断每一列是否满足
            if (board[j][i] !== '.'){
                if (mapCross.has(board[j][i]))
                    return false;
                else
                    mapCross.set(board[j][i], 1) 
            }
        }
    }
    let n = 0,
    linenum = 0,
    num = 0;
    while (n < 9){
        let mapSmall = new Map();
        for (let i = 3 * num; i < 3 * num + 3; i++) {
            for (let j = 3 * linenum; j < 3 * linenum + 3; j++) {
                if (board[i][j] !== '.'){
                    if (mapSmall.has(board[i][j]))
                        return false;
                    else
                        mapSmall.set(board[i][j], 1) 
                }
            }
        }
        linenum++;
        if (linenum === 3) {
            linenum = 0;
            num++;
        }
        n++;
    }
    return true;
};

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
console.log(isValidSudoku(board))