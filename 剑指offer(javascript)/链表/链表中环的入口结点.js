/**
 * 题目描述
* 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
* 遇到环，考虑快慢指针，快指针总是比慢指针快一步，两个指针总会相遇。
 * @param {*} pHead 
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if (pHead === null)
        return null
    let fast = pHead, slow = pHead;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            let slow2 = pHead;
            while(slow !== slow2) {
                slow = slow.next;
                slow2 = slow2.next;
            }
            return slow;
        }
    }
    return null
}
