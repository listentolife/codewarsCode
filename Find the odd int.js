/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  //happy coding!
  var K = [];
  var len = A.length;
  for (var i = 0; i < len; i++) {
    var index = K.indexOf(A[i]);
    if(index < 0) {
      K.push(A[i]);
    } else {
      K.splice(index, 1);
    }
  }
  return K[0];
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b); // ^按位异运算，1^1 = 0, 0^0 = 0, 0^1 = 1，只有一个元素出现次数为奇数，则所有元素按位异运算将得到那个元素。