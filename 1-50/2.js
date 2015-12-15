/*
 * link: https://leetcode.com/problems/add-two-numbers/
 *
 * Add Two Numbers
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
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
 * @return {ListNode}
 */

/*
 * 思路：本题考察的是对链表的操作，注意点是：两条链表的长度可能不同，对剩余的节点要做特殊处理，剩余节点的处理过程中
 * 千万不能忽略“进位”
 */
var addTwoNumbers = function(l1, l2) {
    var tempNode1 = l1, tempNode2 = l2;
    var tempVal = 0;
    var resNode = new ListNode(0);
    var resTempNode = resNode;
    while(tempNode1 && tempNode2) {
        tempVal += tempNode1.val + tempNode2.val;
        resTempNode.next = new ListNode(0);
        resTempNode.next.val = tempVal >= 10 ? tempVal - 10 : tempVal;

        tempVal = tempVal >= 10 ? 1 : 0;
        resTempNode =  resTempNode.next;
        tempNode1 = tempNode1.next;
        tempNode2 = tempNode2.next;
    }

    var leftNode = tempNode1 ? tempNode1 : tempNode2;
    while (leftNode || tempVal) {
        tempVal += leftNode ? leftNode.val : 0;
        resTempNode.next = new ListNode(0);
        resTempNode.next.val = tempVal >= 10 ? tempVal -10: tempVal;

        tempVal = tempVal >= 10 ? 1 : 0;
        resTempNode =  resTempNode.next;
        leftNode = leftNode ? leftNode.next : null;
    }
    return resNode.next;
};
