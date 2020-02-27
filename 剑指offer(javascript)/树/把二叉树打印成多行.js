function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Print(pRoot)
{
    // write code here
    let queue = [];
    let res = [];
    if (pRoot === null)
        return [];
    queue.push(pRoot);
    while (queue.length > 0) {
        let len = queue.length;
        let tres = [];
        for (let i = 0; i < len; i++) {
            let tmp = queue.shift();
	        if (tmp !== null)
            	tres.push(tmp.val);
            if (tmp.left !== null)
                queue.push(tmp.left);
            if (tmp.right !== null)
                queue.push(tmp.right);
        }
        res.push(tres);
    }
    return res
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
