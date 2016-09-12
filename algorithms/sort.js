/* sort algorithem
*
*
*
*
*
*
*/
'use strict';

// bubble sort: time complexity O(n^2); space complexity O(1); stable sort;
function bubbleSort(arr) {
  if (!arr.length || arr.length < 2) {
    return arr;
  }

  const len = arr.length;
  let flag = true;
  let temp;
  for (let i = len - 1; i > 1; --i) {
    if (flag) {
      flag = false;
      for (let j = 0; j < i; ++j) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          flag = true;
        }
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 87, 4, 22, 9, 2, 2, 9, 23]));

// select sort: time complexity O(n^2); space complexity O(1); stable sort;
