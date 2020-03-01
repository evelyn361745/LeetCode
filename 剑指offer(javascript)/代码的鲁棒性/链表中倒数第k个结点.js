// 1.
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    let t = head;
    let n = 0;
    while (t) {
        n++;
        t = t.next
    }
    if (k < 1 || k > n)
        return null;
    else {
        let i = 1;
        while (i !== n - k + 1) {
            head = head.next;
            i++;
        }
    }
    return head;
}

// 2.fast and slow 
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    let fast = head, slow = head;
    for (let i = 0; i < k; i++) {
        if (fast)
            fast = fast.next;
        else
            return null;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
