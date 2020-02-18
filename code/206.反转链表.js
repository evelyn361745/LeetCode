/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let x = null;
    let cur = head;
    while (cur) {
        let tp = cur.next;
        cur.next = x;
        x = cur;
        cur = tp;
    }
    return x;
};
