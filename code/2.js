/**
 * 
 */
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
 * @return {ListNode} l3.next
 */
var addTwoNumbers = function(l1, l2) {
    l = new ListNode(0);
    l3 = l;
    let tmp = 0;  // 保存进位值
    while(l2 || l1) {
        let x = (l1 != null)?l1.val:0; // 判断是否l1, l2有值
        let y = (l2 != null)?l2.val:0;
        let sum = x + y + tmp;
        tmp = parseInt(sum / 10); // 更新进位值
        l.next = new ListNode(sum % 10); //插入新的节点，节点值为两数之和取余
        l = l.next; 
        if (l1) {
            l1 = l1.next;
        }
        if(l2) {
            l2 = l2.next;
        }
    }
    if(tmp) { // 如果还有进位值，插入当前进位值
        l.next = new ListNode(tmp) 
    }
    return l3.next
};