/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = "";
    let l4 = "";
    if (!l1 && !l2)
        return null
    else if (l1 && !l2)
        return l1;
    else if (!l1 && l2)
        return l2;
   else  if (l1 && l2) {
        if (l1.val <= l2.val) {
            l3 = l1;
            l4 = l3;
            l1 = l1.next;
        } else {
            l3 = l2;
            l4 = l3;
            l2 = l2.next;
        }
        while(l1 && l2) {
            if (l1.val <= l2.val){
                l3.next = l1;
                l1 = l1.next;
            }else {
                l3.next = l2;
                l2 = l2.next;
            }
            l3 = l3.next;
        }
        while(l1){
            l3.next = l1;
            l1 = l1.next;
            l3 = l3.next;
        }
        while(l2) {
            l3.next = l2;
            l2 = l2.next;
            l3 = l3.next;
        }
        return l4;
    }
};
