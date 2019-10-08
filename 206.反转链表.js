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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let p = null
  let q = head
  while (q) {
    let temp = q.next
    q.next = p
    p = q
    q = temp
  }
  return p
};

let head = new ListNode(1)
let second = new ListNode(2)
head.next = second
let thrid = new ListNode(3)
second.next = thrid
let four = new ListNode(4)
thrid.next = four
let five = new ListNode(5)
four.next = five
let ans = reverseList(head)
while (ans) {
  console.log(ans.val)
  ans = ans.next
}


