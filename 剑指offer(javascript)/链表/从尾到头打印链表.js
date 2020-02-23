function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    // write code here
    let res = []
    if (head === null)
        return res;
    let x = null;
    while(head !== null) {
        res.unshift(head.val)
        head = head.next;
    }
    return res;
}

let a = new ListNode(1);
let b = new ListNode(2);
a.next = b;
console.log(printListFromTailToHead(a))