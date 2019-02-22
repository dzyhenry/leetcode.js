/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var arr2List = function(arr) {
  if (arr.length <= 0) {
    return null;
  }
  var head = tail = { val: arr[0], next: null };
  for (var i = 1; i < arr.length; i++) {
    tail.next = { val: arr[i], next: null };
    tail = tail.next;
  }
  return head;
}
var list2Arr = function(list) {
  var arr = [];
  while(list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

var mergeKLists = function(lists) {
  var head = tail = { next: null };   
  var todos = lists.slice().filter(item => item);

  while(todos.length > 0) {
    var min = Infinity;
    var selectedIdx = -1;
    var endIndex = -1;
    for (var i = 0; i < todos.length; i++) {
      if (!todos[i]) {
        endIndex = i;
        continue;
      }

      if (todos[i].val <= min) {
        selectedIdx = i;
        min = todos[selectedIdx].val;
      }
    }
    tail.next = todos[selectedIdx];
    tail = tail.next;
    todos[selectedIdx] = todos[selectedIdx].next;
    if (!todos[selectedIdx]) {
      todos.splice(selectedIdx, 1);
    }
  }
  return head.next;
};

const res = mergeKLists([arr2List([1, 4, 5]), arr2List([1, 3, 4]), arr2List([2, 6])]);
console.log(list2Arr(res));
