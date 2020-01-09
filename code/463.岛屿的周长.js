/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let circle = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let tmp = 4;
                if (i > 0 && grid[i - 1][j] === 1)
                    tmp = tmp - 1;
                if (i < (grid.length - 1) && grid[i + 1][ j] === 1)
                    tmp = tmp - 1;
                if (j > 0 && grid[i][j - 1] === 1)
                    tmp = tmp - 1;
                if (j < (grid[0].length - 1) && grid[i][j + 1] === 1)
                    tmp = tmp - 1;
                circle = circle + tmp;
            }
        }
    }
    return circle;
};
let grid = [[0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]]
console.log(islandPerimeter(grid))