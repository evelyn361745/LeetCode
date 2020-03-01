/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if (pHead === null)
        return null;
    let x = null;
    while (pHead) {
        let tmp = new ListNode(pHead.val);
        tmp.next = x;
        x = tmp;
        pHead = pHead.next;
    }
    return x;
}
