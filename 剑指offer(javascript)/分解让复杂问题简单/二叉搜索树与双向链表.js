/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 中序遍历后修改左右指针
function Convert(pRootOfTree)
{
    // write code here
    if (pRootOfTree === null)
        return null;
    let res = [];
    inOrder(pRootOfTree, res);
    let n = res.length;
    for (let i = 0; i < n; i++) {
        res[i].left = (i === 0) ? null : res[i - 1];
        res[i].right = (i === res.length - 1) ? null : res[i + 1];
    }
    return res[0];
}

function inOrder(root, res) {
    if (root === null)
        return;
    if (root) {
        inOrder(root.left, res)
        res.push(root)
        inOrder(root.right, res)
    }
}
