/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
// 在旧链表中创建新链表，此时不处理新链表的兄弟结点，
function Clone(pHead)
{
    // write code here
    if (pHead === null)
        return null;
    let cur = pHead;
    while (cur) {
        let tmp = new RandomListNode(cur.label);
        tmp.next = cur.next;
        cur.next = tmp;
        cur = cur.next.next;
    }
    cur = pHead;
    // 根据旧链表的兄弟结点，初始化新链表的兄弟结点
    while (cur) {
        if (cur.random) {
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next;
    }
    let newpHead = pHead.next;
    cur = pHead;
    // 从旧链表中拆分得到新链表
    while (cur) {
        let temp = cur.next;
        cur.next = temp.next;
        temp.next = (temp.next === null)? null : temp.next.next;
        cur = cur.next;
    }
    return newpHead;
}
