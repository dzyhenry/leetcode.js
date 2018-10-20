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
  var l3Head = { next: null };
  var l3Tail = l3Head;
  while(l1 && l2) {
    if (l1.val <= l2.val) {
      l3Tail.next = l1;
      l1 = l1.next;
    } else {
      l3Tail.next = l2;
      l2 = l2.next;
    }
    l3Tail = l3Tail.next;
  }

  if (!l1) {
    l3Tail.next = l2;
  } else if (!l2) {
    l3Tail.next = l1;
  }

  return l3Head.next;
};
