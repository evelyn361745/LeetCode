function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function IsBalanced_Solution(pRoot)
{
    // write code here
    if (pRoot === null)
        return true;
    let l = height(pRoot.left),
        r = height(pRoot.right);
    if (Math.abs(l - r) > 1) {
        return false;
    }
    return true && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}

function height(root) {
    if (root === null)
        return 0;
    let cnt = 0,
        queue = [root];
    while(queue.length > 0) {
        let len = queue.length;
        cnt++;
        for (let i = 0; i < len; i++) {
            let tmp = queue.shift();
            if (tmp.left)
                queue.push(tmp.left);
            if (tmp.right)
                queue.push(tmp.right);
        }
    }
    return cnt;
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
console.log(IsBalanced_Solution(a1));
