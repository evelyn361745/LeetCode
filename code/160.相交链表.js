/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 // 说明：两个链表判断相交点，由于可能存在步数差，通过遍历a + b的链表长度，即可找到相交点
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null)
        return null;
    let pA = headA;
    let pB = headB;
    while(pA !== pB)  {
        pA = (pA === null) ? headB : pA.next;
        pB = (pB === null) ? headA : pB.next;
    }
    return pA;
};
