function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    // write code here
    let root = new TreeNode(pre[0]);
    let res = root;
    let iroot = vin.indexOf(pre[0])
    let ileft = pre.slice(1, iroot + 1),
        iright = pre.slice(iroot + 1, pre.length),
        jleft = vin.slice(0, iroot),
        jright = vin.slice(iroot + 1, vin.lengtj);
    if (ileft.length > 1) {
        root.left = reConstructBinaryTree(ileft, jleft);
    }else if (ileft.length === 1) {
        root.left = new TreeNode(ileft[0]);
    }
    if (iright.length > 1) {
        root.right = reConstructBinaryTree(iright, jright);
    }else if (iright.length === 1) {
        root.right = new TreeNode(iright[0]);
    }
    return res;
}

let pre = [1,2,3,4], 
    vin = [4,3,2,1];
console.log(reConstructBinaryTree(pre, vin))