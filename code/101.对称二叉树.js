/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return judge(root, root);
};

function judge (L, R) {
    if (L === null  && R === null)
        return true;
    if (L=== null || R === null)
        return false;
    return (L.val === R.val) && judge(L.left, R.right) && judge(L.right, R.left);
}
