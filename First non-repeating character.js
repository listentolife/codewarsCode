/*
Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

*/

/*
 *一般考虑会遍历字符串的每一位，然后拿到每一位元素去跟后面的元素做比较，没有重复则直接返回，时间复杂度是O(n2)
 *这里考虑的是空间换时间的方案
 *用一个map表来存储字符串中最早出现的元素
 *用数组res来储存未重复的元素，其中res[0]为字符串第一位无重复元素
 *时间复杂度为O(n)
 **/


function firstNonRepeatingLetter(s) {
  // Add your code here
  var map = {};
  var res = [];
  let len = s.length;
  if (len <= 1) {
    return s;
  } else {
    for(let i = 0; i < len; i++) {
      let ss = s[i].toLowerCase();
      if (!map[ss]) {
        map[ss] = s[i];
        res.push(ss);
      } else {
        let ind = res.indexOf(ss);
        if (ind >= 0) {
          res.splice(ind, 1);
        }
      }
    }
  }
  if (res.length === 0) {
    return "";
  } else {
    return map[res[0]];
  }
}

/*
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
*/