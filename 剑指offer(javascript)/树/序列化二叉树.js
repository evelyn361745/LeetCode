function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Serialize(pRoot)
{
    // write code here
    let arr = [];
    if (pRoot === null){
        arr.push('#')
    }else {
        arr.push(pRoot.val);
        arr = arr.concat(Serialize(pRoot.left));
        arr = arr.concat(Serialize(pRoot.right));
    }
    return arr;
}
function Deserialize(s)
{
    // write code here
    let node = null;
    if (s.length < 1)
        return null;
    let n = s.shift();
    if (typeof n === 'number') {
        node = new TreeNode(n);
        node.left = Deserialize(s);
        node.right = Deserialize(s);
    }
    return node
}
let a1 = new TreeNode(1),
a2 = new TreeNode(2),
a3 = new TreeNode(3),
a4 = new TreeNode(4),
a5 = new TreeNode(5),
a6 = new TreeNode(6),
a7 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;
console.log(Serialize(a1));
