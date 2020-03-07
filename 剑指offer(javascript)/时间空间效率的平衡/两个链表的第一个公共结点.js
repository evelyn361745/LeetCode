/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    if (pHead1 === null || pHead2 === null)
        return null;
    let slow = pHead1,
        fast = pHead2;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
        if (slow !== fast) {
            if (slow === null)
                slow = pHead2;
            if (fast === null)
                fast = pHead1;
        }
    }
    return slow;
}
