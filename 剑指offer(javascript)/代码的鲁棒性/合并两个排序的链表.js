/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if (pHead1 === null)
        return pHead2;
    if (pHead2 === null)
        return pHead1;
    let x = new ListNode(0);
    let res = x;
    while (pHead1 && pHead2) {
        if (pHead1.val < pHead2.val) {
            let tmp = new ListNode(pHead1.val);
            x.next = tmp;
            x =  tmp;
            pHead1 = pHead1.next;
        }else {
            let tmp = new ListNode(pHead2.val);
            x.next = tmp;
            x =  tmp;
            pHead2 = pHead2.next;
        }
    }
    while (pHead1) {
        let tmp = new ListNode(pHead1.val);
        x.next = tmp;
        x =  tmp;
        pHead1 = pHead1.next;
    }
    while (pHead2) {
        let tmp = new ListNode(pHead2.val);
        x.next = tmp;
        x =  tmp;
        pHead2 = pHead2.next;
    }
    return res.next;
}
