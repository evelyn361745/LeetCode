/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let cnt = 0;
    if (root === null)
        return 0;
    else {
        cnt += 1;
        let l = maxDepth(root.left);
        let r = maxDepth(root.right);
        cnt += Math.max(l, r);
        return cnt;
    }
};
