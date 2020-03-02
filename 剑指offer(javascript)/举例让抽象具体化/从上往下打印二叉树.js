/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    let res = [];
    let queue = [];
    if (root === null)
        return res;
    queue.push(root);
    while (queue.length > 0) {
        let t = queue.length;
        for (let i = 0; i < t; i++) {
            let tmp = queue.shift();
            res.push(tmp.val);
            if (tmp.left)
                queue.push(tmp.left);
            if (tmp.right)
                queue.push(tmp.right);
        }
    }
    return res;
}


