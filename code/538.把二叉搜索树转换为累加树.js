/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 /*  说明：二叉搜索树是有序树，左子树小于根节点小于右子树；
 *所以，采用变形的中序遍历
 */
var convertBST = function(root) {
    if (root === null)
        return null;
    dfs(root, 0);
    return root;
};

function dfs(root, sum) {
    if (root == null)
        return sum;
    sum = dfs(root.right, sum) // 获得当前比跟节点大的右子树的和
    root.val += sum; // 更新当前根节点的值
    sum = dfs(root.left, root.val);// 左子树的值等于右子树加上根节点的值
    return sum;
}


