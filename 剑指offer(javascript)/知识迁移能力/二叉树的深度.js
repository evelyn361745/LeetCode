/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    // write code here
    let deepLen = 0;
    if (pRoot === null)
        return 0;
    let queue = [pRoot];
    while (queue.length !== 0) {
        let len = queue.length;
        deepLen++;
        for (let i = 0; i < len; i++) {
            let tmp = queue.shift();
            if (tmp.left)
                queue.push(tmp.left);
            if (tmp.right)
                queue.push(tmp.right);
        }
    }
    return deepLen;
}
