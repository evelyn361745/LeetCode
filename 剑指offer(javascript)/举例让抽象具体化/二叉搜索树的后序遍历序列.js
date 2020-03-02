function VerifySquenceOfBST(sequence)
{
    // write code here
    if (sequence.length === 0)
        return false;
    let root = sequence[sequence.length - 1];
    let left = [];
    let right = [];
    let i = 0;
    let sp = -1;
    while (i < sequence.length - 1) {
        if (sequence[i] > root) {
            sp = i;
			break;
        }
		i++;
    }
    left = sequence.slice(0, i);
    right = sequence.slice(i, sequence.length - 1);
    for (let j = 0; j < left.length; j++) {
        if (left[j] > root)
            return false;
    }
    for (let j = 0; j < right.length; j++) {
        if (right[j] < root)
            return false;
    }
	let l = true, r = true;
	if (left.length !== 0 )
		l = VerifySquenceOfBST(left);
	if (right.length !== 0)
		r = VerifySquenceOfBST(right)
	
    return true && l && r;
}
let s = [1,3,2,6,9,7,5];
console.log(VerifySquenceOfBST(s));
