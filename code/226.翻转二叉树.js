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
var invertTree = function(root) {
    if (root === null)
        return null;
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    return root;
};
