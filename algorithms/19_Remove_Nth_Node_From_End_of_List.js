/* 
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * Example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var preHead = { next: head };
  var p1 = preHead;
  var p2 = head;
  for (var i = 0; i < n; i++) {
    if (p2.next !== null) {
      p2 = p2.next;
    }
  }

  while(p2.next !== null) {
    p2 = p2.next;
    p1 = p1.next;
  }

  if (p1 === preHead) {
    head = head.next; 
  } else {
    p1.next = p1.next.next;
  }

  return head;
};
