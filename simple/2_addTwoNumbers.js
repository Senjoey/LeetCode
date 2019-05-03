/** 
给出两个非空的链表用来表示两个非负的整数。其中,它们各自的位数是按照逆序的方式存储的，
并且它们的每个节点只能存储一位数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 遍历两个链表，两个结点相加，可能两个链表不一样长
    let digitSum = l1.val + l2.val;
    let digit = digitSum;
    let sum = new ListNode(digit%10); 
    let headerSum = sum;
    let carry = digitSum>=10 ? 1 : 0;
    l1 = l1.next;
    l2 = l2.next;
    while (l1 !== null && l2 !== null) {
        digitSum = l1.val + l2.val + carry;
        sum.next =  new ListNode(digitSum%10);
        carry = digitSum>=10 ? 1 : 0;  
        sum = sum.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    // 两个链表不一样长
    if (l1 !== null) {
        while (l1 !== null) {
            digitSum = l1.val + carry;
            sum.next =  new ListNode(digitSum%10);
            carry = digitSum>=10 ? 1 : 0;  
            sum = sum.next;
            l1 = l1.next;
        }
    }
    if (l2 !== null) {
        while (l2 !== null) {
            digitSum = l2.val + carry;
            sum.next =  new ListNode(digitSum%10);
            carry = digitSum>=10 ? 1 : 0;  
            sum = sum.next;
            l2 = l2.next;
        }
    } 
    if (carry > 0) {
        sum.next = new ListNode(carry);
    }
    return headerSum;
};

var test = function() {
    num1 = [1];
    num2 = [9,9];
    let l1 = new ListNode(num1[0]);
    let headerL1 = l1;
    let l2 = new ListNode(num2[0]);
    let headerL2 = l2;
    for (let i=1; i<num1.length; i++) {
        l1.next = new ListNode(num1[i]);
        l1 = l1.next;
    }
    for (let i=1; i<num2.length; i++) {
        l2.next = new ListNode(num2[i]);
        l2 = l2.next;
    }
    // while (headerL1 !== null) {
    //     console.log(headerL1.val + ' ');
    //     headerL1 = headerL1.next;
    // }
    let sum = addTwoNumbers(headerL1, headerL2);
    while (sum !== null) {
        console.log(sum.val);
        sum = sum.next;
    }
}

test();
