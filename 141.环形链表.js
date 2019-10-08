/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false
    let slow = head
    let fast = head
    if (!slow.next) return false
    while (fast) {
        slow = slow.next
        fast = fast.next && fast.next.next
        if (slow === fast) return true
    }
    return false
};
// const three = new ListNode(3)
// const two = new ListNode(2)
// const zero = new ListNode(0)
// const four = new ListNode(4)
// three.next = two
// two.next = zero
// zero.next = four
// four.next = two
// console.log(hasCycle(three))
