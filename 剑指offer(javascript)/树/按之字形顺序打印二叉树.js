function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Print(pRoot) {
    if (pRoot === null) {
        return []
    }
    let result = []
    let queue = []
    let vrse = false
    queue.push(pRoot)
    while (queue.length > 0) {
        let len = queue.length
        let row = []
        for (let i = 0; i < len; i++) {
            let shiftItem = queue.shift()
            if (shiftItem.left) {
                queue.push(shiftItem.left)
            }
            if (shiftItem.right) {
                queue.push(shiftItem.right)
            }
            row.push(shiftItem.val)
        }
        if (vrse) {
            row.reverse();
            result = result.concat(row)
        } else {
            result = result.concat(row)
        }
        vrse = !vrse
    }
    return result
}
let a1 = new TreeNode(1),
a2 = new TreeNode(2),
a3 = new TreeNode(3),
a4 = new TreeNode(4),
a5 = new TreeNode(5),
a6 = new TreeNode(6),
a7 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;
console.log(Print(a1));
