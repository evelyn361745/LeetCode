/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        for (j = 0; j < points.length; j++) {  // 统计以当前点为i，距离相等的点的数量
            if (j != i) {
                const dist = distance(points[i], points[j]);
                if (map.has(dist))
                    map.set(dist, map.get(dist) + 1);
                else
                    map.set(dist, 1);
            }
        }
        map.forEach(function(value, key) { // 考虑顺序，数量为n * n - 1
            res += value * (value - 1);
        })
    }
    return res;
};

function distance(a, b) {
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
}

let points = [[0,0],[1,0],[2,0]]
console.log(numberOfBoomerangs(points))