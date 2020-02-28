function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function KthNode(pRoot, k)
{
    // write code here
    let x = inOrder(pRoot);
    if (k < 0 || k > x.length)
        return null;
    else 
        return x[k - 1];
}

function inOrder(pRoot) {
    let res = [];
    if (pRoot !== null) {
        if (pRoot.left !== null)
            res = res.concat(inOrder(pRoot.left))
        res.push(pRoot)
        if (pRoot.right !== null)
            res = res.concat(inOrder(pRoot.right))
    }
    return res;
}
let a1 = new TreeNode(8),
a2 = new TreeNode(6),
a3 = new TreeNode(10),
a4 = new TreeNode(5),
a5 = new TreeNode(7),
a6 = new TreeNode(9),
a7 = new TreeNode(11);
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;
console.log(KthNode(a1, 1));
