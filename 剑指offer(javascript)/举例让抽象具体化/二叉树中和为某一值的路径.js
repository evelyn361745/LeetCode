function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber)
{
    // write code here
    let list = [];
    if (root === null)
        return []
    DFS(root, expectNumber, [], 0, list);
    return list;
}

function DFS(root, expectNumber, path, currentSum, list) {
    currentSum += root.val;
    path.push(root.val);
    if (currentSum == expectNumber && root.left === null && root.right === null){
        list.push(path.slice(0)); 
    }
    if (root.left !== null) {
        DFS(root.left,expectNumber,path,currentSum,list);
    }
    if (root.right !== null) {
        DFS(root.right,expectNumber,path,currentSum,list);
    }
    path.pop();
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
console.log(FindPath(a1, 7));
