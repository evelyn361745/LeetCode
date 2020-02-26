function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function isSymmetrical(pRoot)
{
    // write code here
    if (pRoot === null)
        return true;
    let jpRoot = pRoot;
    return justify(pRoot.left, pRoot.right);
}
function justify(ipRoot, jpRoot) {
    if (ipRoot === null && jpRoot === null)
	return true;
    if (ipRoot === null || jpRoot === null)
	return false;
    if (ipRoot.val !== jpRoot.val)
	return false;
    return true && justify(ipRoot.left, jpRoot.right) && justify(ipRoot.right, jpRoot.left);
}

let a1 = new TreeNode(1),
a2 = new TreeNode(2),
a3 = new TreeNode(2),
a4 = new TreeNode(3),
a5 = new TreeNode(3),
a6 = new TreeNode(4),
a7 = new TreeNode(4);
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a6;
a3.left = a7;
a3.right = a5;
console.log(isSymmetrical(a1));
