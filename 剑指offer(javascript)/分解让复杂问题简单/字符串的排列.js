function Permutation(str)
{
    // write code here
    if (str.length === 0)
        return []
    let num = str.split("");
    num.sort();
    let result = [],
        n = num.length;
    DFS(num, [], result, n);
    return result;
}

function DFS(num, path, result, n) {
    if (path.length === n) {
        let s = path.slice(0).join("");
        if (result.indexOf(s) === -1)
            result.push(s);
    }else {
        for (let j = 0; j < num.length; j++) {
            path.push(num[j]);
			let l = num.slice(0, j);
			let r = num.slice(j + 1, num.length);
            DFS(l.concat(r), path, result, n);            
        }
    }
    path.pop();
}
let str = "aa";
console.log(Permutation(str));
