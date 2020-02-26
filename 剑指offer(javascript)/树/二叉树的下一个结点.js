/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    if (pNode === null)
        return null;
    // 当期节点有右子树，则遍历右子树找到最左节点
    if (pNode.right !== null) {
        let cur = pNode.right;
        while(cur.left !== null) { // 存在左子树，找到最左节点
            cur = cur.left
        }
        return cur;//不存在，则返回null
    }
    // 节点无右子树，并且是其父节点的左子树
    else if (pNode.next !== null && pNode.next.left === pNode) {
        return pNode.next;
    }else {
        // 节点无右子树，沿着指向父节点的指针往上遍历，直到找到一个是它父节点的左子节点的节点
        if (pNode.next === null)
            return null;
        let father = pNode.next;
        while (father.next !== null && father.next.left !== father) {
            father = father.next;
        }
        return father.next;
    }
}
