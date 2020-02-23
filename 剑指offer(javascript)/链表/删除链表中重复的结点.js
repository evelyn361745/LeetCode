function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead)
{
    // write code here
    let tmp = pHead;
    let duplicationList = [],
        map = new Map();
    while(tmp) {
        if (map.has(tmp.val)) {
            map.set(tmp.val, map.get(tmp.val) + 1);
            duplicationList.push(tmp.val)
        }else {
            map.set(tmp.val, 1)
        }
        tmp = tmp.next;
    }
    console.log(duplicationList)
    let x = new ListNode(0);
    let p = x;
    while(pHead) {
        if (duplicationList.indexOf(pHead.val) === -1) {
            let t = new ListNode(pHead.val);
            x.next = t;
            x = x.next;
        }
        pHead = pHead.next;
    }
    return p.next;
}
let a1 = new ListNode(1);
let a2 = new ListNode(2);
let a3 = new ListNode(3);
let a4 = new ListNode(3);
let a5 = new ListNode(4);
let a6 = new ListNode(4);
let a7 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;
a6.next = a7;
console.log(deleteDuplication(a1))