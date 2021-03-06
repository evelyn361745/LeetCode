/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if (pRoot1 === null || pRoot2 === null)
        return false;
    return judge(pRoot1, pRoot2) || judge(pRoot1.left, pRoot2) || judge(pRoot1.right, pRoot2)
}

function judge(pRoot1, pRoot2) {
    if (pRoot2 === null)
        return true;
    if (pRoot1 === null)
        return false;
    if (pRoot1.val === pRoot2.val) {
        return judge(pRoot1.left, pRoot2.left) && judge(pRoot1.right, pRoot2.right)
    }else {
        return false;
    }
}

